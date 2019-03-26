import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { City } from 'app/modules/cities.module';
import { BasicInfo } from 'app/modules/BasicInfo.module';
import { PersonalInfoService } from 'app/services/personal-info.service';

@Component({
  selector: 'app-update-national-id',
  templateUrl: './update-national-id.component.html',
  styleUrls: ['./update-national-id.component.scss']
})
export class UpdateNationalIdComponent implements OnInit {

  minDate = new Date(1950, 0, 1);
  addForm: FormGroup;
  maxDate = new Date();
  genders:Array<string>= ['Male','Female'];
  regionInfo: City = new City(); 
  cities:any = this.regionInfo.cities;
  _province:string='';
  _country:string='';
  religions:any = this.regionInfo.religions;
  professions:Array<string> = new BasicInfo().professions;
  _martialStatus:Array<string> = new BasicInfo().martialStatus; 
  constructor(
    private _formBuilder: FormBuilder,
    private userService: PersonalInfoService
    ) {}

  ngOnInit() {
    this.addForm = this._formBuilder.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      fatherDID: ['',Validators.required],
      motherDID: ['',Validators.required],
      familyNumber: ['',Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      gender:['',Validators.required],
      martialStatus:['',Validators.required],
      country: ['', Validators.required],
      description: ['', Validators.required],
      province: ['', Validators.required],
      division:['',Validators.required],
      district:['', Validators.required],
      tehsile:['',Validators.required],
      date:['',null] ,
      religion:['',null],
      profession:['',null]
    })
  }

  registerUser(){
    console.log(this.addForm);
    console.log(JSON.stringify(this.addForm.value))

        this.userService.create(this.addForm.value)
            .subscribe(
                data => {
                    console.log(data);
                },
                error => {
                  console.log(error);
                });
  }

  getData(){
    //send request to server for generating DID and return
    console.log("generate ID");
  }

  onCity(event:any){

    console.log(event);
    this._province = event.admin;
    this._country = event.country;
  }

}
