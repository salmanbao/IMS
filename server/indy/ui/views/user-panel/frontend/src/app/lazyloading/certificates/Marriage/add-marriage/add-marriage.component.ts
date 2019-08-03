import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { City } from 'app/modules/cities.module';
import { BasicInfo } from 'app/modules/BasicInfo.module';
import { CertificateService } from 'app/services/certificate.service';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';
import { AuthenticationService } from 'app/services/authentication.service';


@Component({
  selector: 'app-add-marriage',
  templateUrl: './add-marriage.component.html',
  styleUrls: ['./add-marriage.component.scss']
})
export class AddMarriageComponent implements OnInit {

  value: string;
  minDate = new Date(1950, 0, 1);
  addForm: FormGroup;
  maxDate = new Date();
  genders: Array<string> = ['Male', 'Female'];
  regionInfo: City = new City();
  cities: any = this.regionInfo.cities;
  _province: string;
  _country: string;
  religions: any = this.regionInfo.religions;
  professions: Array<string> = new BasicInfo().professions;
  _martialStatus: Array<string> = new BasicInfo().martialStatus;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private auth: AuthenticationService,
    private certificateService: CertificateService
  ) { }

  ngOnInit() {
    this.addForm = this._formBuilder.group({
      username:this.auth.getUser(),
      did: ['', null],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      fatherDID: ['', Validators.required],
      motherDID: ['', Validators.required],
      familyNumber: ['', Validators.required],
      husbandAddress: ['', Validators.required],
      wifeAddress: ['', Validators.required],
      husbandDOB: ['', Validators.required],
      wifeDOB: ['', Validators.required],
      witnessOne: ['', Validators.required],
      witnessTwo: ['', Validators.required],
      witnessThird: ['', Validators.required],
      MarriageDate: ['', Validators.required],
    })
  }

  addMarriage() {
    this.certificateService.addMarriage(this.addForm.value)
      .subscribe(
        data => {
          this.openSnackBar(data['msg']);
        },
        error => {
          this.openSnackBar(error);
        });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
