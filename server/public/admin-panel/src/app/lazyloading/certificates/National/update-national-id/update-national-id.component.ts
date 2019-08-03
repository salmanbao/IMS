import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { City } from 'app/modules/cities.module';
import { BasicInfo } from 'app/modules/BasicInfo.module';
import { Area } from 'app/modules/area.module';
import { CertificateService } from 'app/services/certificate.service';

@Component({
  selector: 'app-update-national-id',
  templateUrl: './update-national-id.component.html',
  styleUrls: ['./update-national-id.component.scss']
})
export class UpdateNationalIdComponent implements OnInit {

  minDate = new Date(1950, 0, 1);
  addForm: FormGroup;
  maxDate = new Date();
  genders: Array<string> = ['Male', 'Female'];
  regionInfo: City = new City();
  cities: any = this.regionInfo.cities;
  _provincesArray: any = new Area().provinces;
  provinces: Array<string> = []; // array of all provinces
  divisions: Array<string> = []; //array of all divisions
  districts: Array<string> = []; //array of all districts
  tehsiles: Array<string> = []; //array of all tehsiles
  _districts: any;
  _country: string = '';
  religions: any = this.regionInfo.religions;
  professions: Array<string> = new BasicInfo().professions;
  _martialStatus: Array<string> = new BasicInfo().martialStatus;
  constructor(
    private _formBuilder: FormBuilder,
    private certificateService: CertificateService
  ) { }

  ngOnInit() {
    this.addForm = this._formBuilder.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      fatherDID: ['', Validators.required],
      motherDID: ['', Validators.required],
      familyNumber: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      gender: ['', Validators.required],
      martialStatus: ['', Validators.required],
      country: ['', Validators.required],
      description: ['', Validators.required],
      province: ['', Validators.required],
      division: ['', Validators.required],
      district: ['', Validators.required],
      tehsile: ['', Validators.required],
      date: ['', null],
      religion: ['', null],
      profession: ['', null]
    })
    this._provincesArray.forEach(element => {
      this.provinces = this.provinces.concat(Object.keys(element));
    });
  }

  registerUser() {
    console.log(this.addForm);
    console.log(JSON.stringify(this.addForm.value))

    // this.certificateService.addNationalId(this.addForm.value)
    //   .subscribe(
    //     data => {
    //       console.log(data);
    //     },
    //     error => {
    //       console.log(error);
    //     });
  }

  generateID() {
    //send request to server for generating DID and return
    console.log("generate ID");
  }

  onCity(event: any) {
    console.log(event);
  }

  checkProvinces = prov => (element) => {
    if (Object.keys(element)[0] == prov)
      return element;
  }



  getProvinces(event) {
    return this._provincesArray.filter(this.checkProvinces(event))[0]
  }


  onProvince(event: any) {
    this.divisions = [];
    this.districts = [];
    this.tehsiles = [];
    if (event != "invalid") {
      this.divisions = [];
      let tempProvince = this.getProvinces(event);
      tempProvince[event].forEach(element => {
        this.divisions.push(element.division);
      });
    }
    else
      console.log("Invalid choice");
  }

  onDivision(event: any) {
    this.districts = [];
    this.tehsiles = [];
    let prov = this.addForm.get('province').value;
    if (event != "invalid") {
      this._districts = [];
      this.districts = [];
      let tempProvince = this.getProvinces(prov);
      tempProvince[prov].forEach(element => {
        this._districts[element.division] = element.district;
      });
      this._districts[this.addForm.get('division').value].forEach(element => {
        this.districts.push(Object.keys(element)[0]);
      });
    }
    else
      console.log("Invalid choice")
  }

  // checkDistricts(dist){
  //   let dis = this.addForm.get('district').value;
  //   return dist[dis].tehsile;
  // }

  onDistrict(event: any) {
    this.tehsiles = [];
    let dis = this.addForm.get('district').value;
    if (event != "invalid") {
      let _teh;
      this._districts[this.addForm.get('division').value].forEach(element => {
        if (element[dis] != undefined) {
          _teh = element[dis];
        }
      });
      this.tehsiles = _teh[0].tehsil;
    }
    else
      console.log("Invalid choice")
  }
  

}
