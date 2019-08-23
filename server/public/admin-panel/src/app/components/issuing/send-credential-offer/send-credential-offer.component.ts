import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';
import { ApiService } from 'app/services/api.service';
import { FormService } from 'app/services/form.service';
import { FormControlService } from 'app/services/form-control.service';
import { CertificateService } from 'app/services/certificate.service';

@Component({
  selector: 'app-send-credential-offer',
  templateUrl: './send-credential-offer.component.html',
  styleUrls: ['./send-credential-offer.component.scss'],
  providers: [FormService, FormControlService]
})
export class SendCredentialOfferComponent implements OnInit {
  attrsForm;
  relationships;
  relation;
  did;
  credentialDefinitions;
  attributes = [];
  credential;
  selectedCred;
  createCreadentialOffer: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private ref: ChangeDetectorRef,
    private formService: FormService,
    private formControlService: FormControlService,
    private certificateService: CertificateService,
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
        this.did = res['endpointDid'];
        this.credentialDefinitions = res['credentialDefinitions'];
      },
      err => { console.log(err) }
    );
    this.ref.detectChanges();
  }

  sendCredOffer() {
    const { relation, cred_def } = this.createCreadentialOffer.value;
    delete this.createCreadentialOffer.value['relation'];
    delete this.createCreadentialOffer.value['cred_def'];
    console.log(this.createCreadentialOffer.value);
    if (this.createCreadentialOffer.value.title) {
      this.certificateService.addCertificate(this.createCreadentialOffer.value).subscribe(
        res => { },
        err => { }
      );
    } else {
      const value = this.setAttributesValues(this.createCreadentialOffer.value);
      this.indyAPI.sendCredentialOffer(relation, cred_def, value).subscribe(
        res => {
          if (res['success']) {
            this.openSnackBar('Credential Offer successfully send');
          }
        },
        err => { console.log(err) }
      );
    }
  }

  loadAttributes() {
    if (this.selectedCred) {
      this.credential = this.selectedCred;
      let parsedAttributes = [];
      this.getCredentialAttributes(this.selectedCred);
      parsedAttributes = this.attributes;
      this.attributes = [];
      parsedAttributes.forEach((attr) => {
        this.attributes.push(JSON.parse(attr))
      });
      this.attributes = this.attributes.sort().reverse();
      this.attrsForm = this.formService.getForm(this.attributes);
      const controls = this.formControlService.toFormGroup(this.attrsForm);
      this.attributes.forEach((attribute) => {
        const name = attribute.name;
        this.createCreadentialOffer.addControl(name, controls[name]);
      });
      this.ref.detectChanges();
    }
  }

  getCredentialAttributes(cred) {
    for (const credential of this.credentialDefinitions) {
      if (credential.id === cred) {
        this.attributes = Object.keys(credential.value.primary.r)
          .filter((key) => { return key !== 'master_secret' });
        break;
      }
    }
  }

  setAttributesValues(values) {
    const credentialValues = {};
    this.getCredentialAttributes(this.credential);
    this.attributes.forEach(attribute => {
      Object.keys(values).forEach((key) => {
        if (key === JSON.parse(attribute).name) {
          credentialValues[attribute] = values[key];
        }
      })
    });
    this.attributes = [];
    return credentialValues;
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
