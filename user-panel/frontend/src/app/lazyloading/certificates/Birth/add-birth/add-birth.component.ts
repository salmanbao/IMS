import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { City } from 'app/modules/cities.module';
import { BasicInfo } from 'app/modules/BasicInfo.module';
import { CertificateService } from 'app/services/certificate.service';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';
import { AuthenticationService } from 'app/services/authentication.service';


@Component({
  selector: 'app-add-birth',
  templateUrl: './add-birth.component.html',
  styleUrls: ['./add-birth.component.scss']
})
export class AddBirthComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  value: string = '';
  minDate = new Date(1950, 0, 1);
  addBirthForm: FormGroup;
  maxDate = new Date();
  genders: Array<string> = ['Male', 'Female'];
  regionInfo: City = new City();
  cities: any = this.regionInfo.cities;
  _province: string = '';
  _country: string = '';
  religions: any = this.regionInfo.religions;
  constructor(
    private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private auth: AuthenticationService,
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
      dob: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      religion: ['', null]
    })
  }
  addBirthCertificate() {
    let username = this.auth.getUser();
    this.addControl(username, 'username');
    let date = new Date();
    this.addControl(date.toUTCString() , 'date');
    var cont = new FormControl(this._country, Validators.required);
    this.addBirthForm.setControl('country', cont);
    console.log(this.addBirthForm);
    this.certificateService.addBirth(this.addBirthForm.value)
      .subscribe(
        data => {
          this.openSnackBar(data['msg']);
        },
        error => {
          this.openSnackBar(error);
        });
  }

  addControl(name: string, controlname) {
    this.addBirthForm.addControl(controlname, new FormControl(name, Validators.required));
  }

  onCity(event: any) {
    console.log(event)
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

