import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { City } from 'app/modules/cities.module';
import { BasicInfo } from 'app/modules/BasicInfo.module';
import { CertificateService } from 'app/services/certificate.service';


@Component({
  selector: 'app-add-marriage',
  templateUrl: './add-marriage.component.html',
  styleUrls: ['./add-marriage.component.scss']
})
export class AddMarriageComponent implements OnInit {

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
      husbandAddress: ['', Validators.required],
      husbandDOB: ['', Validators.required],
      wifeDOB: ['', Validators.required],
      wifeAddress: ['', Validators.required],
      witnessOne: ['', Validators.required],
      witnessTwo: ['', Validators.required],
      witnessThird: ['', Validators.required],
      MarriageDate: ['', Validators.required],
    })
  }

  //### Create citizen ######
  registerUser() {
    console.log(this.addBirthForm);
    console.log(JSON.stringify(this.addBirthForm.value))

    this.certificateService.addBirth(this.addBirthForm.value)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getData() {
    //send request to server for generating DID and return
    console.log("generate Family Number");
    this.addBirthForm.controls['familyNumber'].setValue("LHR1234");
  }

 

}
