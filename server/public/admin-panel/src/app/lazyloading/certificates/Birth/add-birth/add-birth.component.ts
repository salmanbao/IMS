import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { City } from 'app/modules/cities.module';
import { BasicInfo } from 'app/modules/BasicInfo.module';
import { CertificateService } from 'app/services/certificate.service';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-add-birth',
  templateUrl: './add-birth.component.html',
  styleUrls: ['./add-birth.component.scss']
})
export class AddBirthComponent implements OnInit {
  value: string;
  minDate = new Date(1950, 0, 1);
  addBirthForm: FormGroup;
  maxDate = new Date();
  genders: Array<string> = ['Male', 'Female'];
  regionInfo: City = new City();
  cities: any = this.regionInfo.cities;
  _province: string;
  _country: string;
  religions: any = this.regionInfo.religions;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private snackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
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
      address: ['', Validators.required],
      city: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      date: ['', null],
      religion: ['', null]
    })
  }

  addBirthCertificate() {
    const cert = {
      did: this.addBirthForm.get('did').value,
      fname: this.addBirthForm.get('fname').value,
      lname: this.addBirthForm.get('lname').value,
      fatherDID: this.addBirthForm.get('fatherDID').value,
      motherDID: this.addBirthForm.get('motherDID').value,
      dob: this.addBirthForm.get('date').value,
      gender: this.addBirthForm.get('gender').value,
      religion: this.addBirthForm.get('religion').value,
      familyNumber: this.addBirthForm.get('familyNumber').value,
      address: this.addBirthForm.get('address').value,
      city: this.addBirthForm.get('city').value,
      country: this.addBirthForm.get('county').value
    }
    // this.certificateService.addBirth(cert)
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
    console.log('Generate ID');
  }

  onCity(event: any) {
    this._province = event.admin;
    this._country = event.country;
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
