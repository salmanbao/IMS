import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { City } from 'app/modules/cities.module';
import { PersonalInfoService } from 'app/services/personal-info.service';

@Component({
  selector: 'app-nationalid',
  templateUrl: './nationalid.component.html',
  styleUrls: ['./nationalid.component.scss']
})
export class NationalidComponent implements OnInit {

  minDate = new Date(1950, 0, 1);
  addForm: FormGroup;
  maxDate = new Date();
  regionInfo: City = new City(); 
  cities:any = this.regionInfo.cities;
  _province:string='';
  _country:string='';
  religions:any = this.regionInfo.religions;

  constructor(
    private _formBuilder: FormBuilder,
    private userService: PersonalInfoService
    ) {}

  ngOnInit() {
    this.addForm = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['', null],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      description: ['', Validators.required],
      province: ['', Validators.required],
      date:['',null] ,
      religion:['',null],
      profession:['',null]
    })
  }

   //### Create citizen ######
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

  generateID(){
    //send request to server for generating DID and return
    console.log("generate ID");
  }

  onCity(event:any){

    console.log(event);
    this._province = event.admin;
    this._country = event.country;
  }


}
