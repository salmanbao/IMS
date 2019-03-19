import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm, ValidatorFn, AbstractControl, FormControl} from '@angular/forms';
import { City } from '../../../modules/cities.module';
import { _MatChipListMixinBase, MatOption } from '@angular/material';
import { PersonalInfoService } from 'app/services/personal-info.service';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.scss']
})
export class PersonalinfoComponent implements OnInit {

  minDate = new Date(1950, 0, 1);
  addForm: FormGroup;
  maxDate = new Date();
  regionInfo: City = new City(); 
  cities:any = this.regionInfo.cities;
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
      date:['',null] 
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
  
}
