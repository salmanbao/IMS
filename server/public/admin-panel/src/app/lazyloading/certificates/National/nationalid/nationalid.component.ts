import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { City } from 'app/modules/cities.module';
import { BasicInfo } from 'app/modules/BasicInfo.module';
import { Area } from 'app/modules/area.module';
import { CertificateService } from 'app/services/certificate.service';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-nationalid',
  templateUrl: './nationalid.component.html',
  styleUrls: ['./nationalid.component.scss']
})
export class NationalidComponent implements OnInit {

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
  _country: string;
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
    this.addForm = this._formBuilder.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      fatherDID: ['', Validators.required],
      motherDID: ['', Validators.required],
      familyNumber: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      martialStatus: ['', Validators.required],
      country: ['Pakistan', Validators.required],
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

  addNationalId() {
    // this.certificateService.addNationalId(this.addForm.value)
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

  checkProvinces = prov => (element) => {
    if (Object.keys(element)[0] === prov) {
      return element;
    }
  }

  getProvinces(event) {
    return this._provincesArray.filter(this.checkProvinces(event))[0]
  }

  onProvince(event: any) {
    this.divisions = [];
    this.districts = [];
    this.tehsiles = [];
    if (event !== 'invalid') {
      this.divisions = [];
      const tempProvince = this.getProvinces(event);
      tempProvince[event].forEach(element => {
        this.divisions.push(element.division);
      });
    } else {
      this.openSnackBar('Invalid choice')
    }
  }

  onDivision(event: any) {
    this.districts = [];
    this.tehsiles = [];
    const prov = this.addForm.get('province').value;
    if (event !== 'invalid') {
      this._districts = [];
      this.districts = [];
      const tempProvince = this.getProvinces(prov);
      tempProvince[prov].forEach(element => {
        this._districts[element.division] = element.district;
      });
      this._districts[this.addForm.get('division').value].forEach(element => {
        this.districts.push(Object.keys(element)[0]);
      });
    } else {
      this.openSnackBar('Invalid choice')
    }

  }

  onDistrict(event: any) {
    this.tehsiles = [];
    const dis = this.addForm.get('district').value;
    if (event !== 'invalid') {
      let _teh;
      this._districts[this.addForm.get('division').value].forEach(element => {
        if (element[dis] !== undefined) {
          _teh = element[dis];
        }
      });
      this.tehsiles = _teh[0].tehsil;
    } else {
      console.log('Invalid choice')
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
