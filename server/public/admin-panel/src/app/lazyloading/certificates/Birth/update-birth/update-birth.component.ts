import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { City } from 'app/modules/cities.module';
import { BasicInfo } from 'app/modules/BasicInfo.module';
import { CertificateService } from 'app/services/certificate.service';


@Component({
  selector: 'app-update-birth',
  templateUrl: './update-birth.component.html',
  styleUrls: ['./update-birth.component.scss']
})
export class UpdateBirthComponent implements OnInit {

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
  professions: Array<string> = new BasicInfo().professions;
  _martialStatus: Array<string> = new BasicInfo().martialStatus;
  constructor(
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

  //### Create citizen ######
  registerUser() {
    console.log(this.addBirthForm);
    console.log(JSON.stringify(this.addBirthForm.value))

    // this.certificateService.addBirth(this.addBirthForm.value)
    //   .subscribe(
    //     data => {
    //       console.log(data);
    //     },
    //     error => {
    //       console.log(error);
    //     });
  }

  getData() {
    //send request to server for generating DID and return
    console.log("generate ID");
  }

  onCity(event: any) {

    console.log(event);
    this._province = event.admin;
    this._country = event.country;
  }

}
