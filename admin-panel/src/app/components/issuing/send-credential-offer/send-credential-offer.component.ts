import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';
import { ApiService } from 'app/services/api.service';
import { FormService } from 'app/services/form.service';
import { FormControlService } from 'app/services/form-control.service';

@Component({
  selector: 'app-send-credential-offer',
  templateUrl: './send-credential-offer.component.html',
  styleUrls: ['./send-credential-offer.component.scss'],
  providers: [FormService, FormControlService]
})
export class SendCredentialOfferComponent implements OnInit {
  attrsForm;
  relationships;
  credentialDefinitions;
  attributes = [];
  createCreadentialOffer: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private ref: ChangeDetectorRef,
    private formService: FormService,
    private formControlService: FormControlService,
    private indyAPI: ApiService
  ) { }

  ngOnInit() {
    this.createCreadentialOffer = this.formBuilder.group({
      relation: ['', Validators.required],
      cred_def: ['', Validators.required]
    });
    this.indyAPI.loadGeneralInfo().subscribe(
      res => {
        this.relationships = res['relationships'];
        this.credentialDefinitions = res['credentialDefinitions'];
      },
      err => { }
    );
    this.ref.detectChanges();
  }

  sendCredOffer() {
    const { relation, cred_def } = this.createCreadentialOffer.value;
    delete this.createCreadentialOffer.value['relation'];
    delete this.createCreadentialOffer.value['cred_def'];
    console.log(this.createCreadentialOffer.value)
    this.indyAPI.sendCredentialOffer(relation, cred_def, this.createCreadentialOffer.value).subscribe(
      res => {
        if (res['success']) {
          this.openSnackBar('Credential Offer successfully send');
          this.ref.detach();
        }
      },
      err => { console.log(err) }
    );
  }

  loadAttrs(cred) {
    for (const credential of this.credentialDefinitions) {
      if (credential.id === cred) {
        this.attributes = Object.keys(credential.value.primary.r)
          .filter((key) => { return key !== 'master_secret' });
        break;
      }
    }
    this.attrsForm = this.formService.getForm(this.attributes);
    const controls = this.formControlService.toFormGroup(this.attrsForm);
    this.attributes.forEach((attribute) => {
      this.createCreadentialOffer.addControl(attribute, controls[attribute]);
    });
    this.ref.detectChanges();
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
