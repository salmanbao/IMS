import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';
import { ApiService } from 'app/services/api.service';
import { CertificateService } from 'app/services/certificate.service';

@Component({
  selector: 'app-create-credential-definition',
  templateUrl: './create-credential-definition.component.html',
  styleUrls: ['./create-credential-definition.component.scss']
})
export class CreateCredentialDefinitionComponent implements OnInit {
  schemas;
  schema;
  createCreadentialDef: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private indyAPI: ApiService,
  ) { }

  ngOnInit() {
    this.createCreadentialDef = this.formBuilder.group({
      schema: ['', Validators.required],
      tag: ['', Validators.required]
    });
    this.indyAPI.loadGeneralInfo().subscribe(
      res => {
        this.schemas = res['schemas'];
      },
      err => { }
    );
  }

  create_Cred_Def() {
    const name: String = this.schema;
    const tag = this.createCreadentialDef.get('tag').value;
    this.indyAPI.createCredentialDef(name, tag).subscribe(
      res => {
        if (res['success']) {
          this.createCreadentialDef.reset();
          this.openSnackBar('Schema successfully send');
        }
      },
      err => { console.log(err) }
    );

  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
