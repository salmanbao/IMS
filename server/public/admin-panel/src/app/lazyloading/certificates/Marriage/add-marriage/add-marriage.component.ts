import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { City } from 'app/modules/cities.module';
import { BasicInfo } from 'app/modules/BasicInfo.module';
import { CertificateService } from 'app/services/certificate.service';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-add-marriage',
  templateUrl: './add-marriage.component.html',
  styleUrls: ['./add-marriage.component.scss']
})
export class AddMarriageComponent implements OnInit {

  value: string ;
  minDate = new Date(1950, 0, 1);
  addBirthForm: FormGroup;
  maxDate = new Date();
  genders: Array<string> = ['Male', 'Female'];
  regionInfo: City = new City();
  cities: any = this.regionInfo.cities;
  _province: string ;
  _country: string ;
  religions: any = this.regionInfo.religions;
  professions: Array<string> = new BasicInfo().professions;
  _martialStatus: Array<string> = new BasicInfo().martialStatus;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private certificateService: CertificateService
  ) { }

  ngOnInit() {
    this.addBirthForm = this._formBuilder.group({

      did: ['', null],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      fatherDID: ['', Validators.required],
      motherDID: ['', Validators.required],
      familyNumber: ['', Validators.required],
      husbandAddress: ['', Validators.required],
      husbandDOB: ['', Validators.required],
      wifeDOB: ['', Validators.required],
      wifeAddress: ['', Validators.required],
      witnessOne: ['', Validators.required],
      witnessTwo: ['', Validators.required],
      witnessThird: ['', Validators.required],
      MarriageDate: ['', Validators.required],
    });
  }

  AddMarriageCert() {
    // this.certificateService.addMarriage(this.addBirthForm.value)
    //   .subscribe(
    //     data => {
    //       if (data['success']) {
    //         this.openSnackBar('Successfully Added');
    //       }
    //     },
    //     error => {
    //       this.openSnackBar(error);
    //     });
  }

  getData() {
    this.addBirthForm.controls['familyNumber'].setValue('LHR1234');
  }


  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
