import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

export interface PeriodicElement {
  did:  string;
  fname: string;
  lname: string;
  fatherDID: string;
  motherDID: string;
  city: string;
  age: Number;
  gender: string;
  religion: string;
  issueanceDate: String;
} 

const ELEMENT_DATA: PeriodicElement[] = [
  {
    did: 'G45YY56H76UI78I78',
    fname: 'Muhammad Salman',
    lname:'Muhammad Saleem',
    fatherDID:"HG45Y54Y6UU67II7I78",
    motherDID :"TYJH6J56U7I978OI87O87",
    city: 'Lahore',
    age: 21,
    gender: 'male',
    religion: 'Islam',
    issueanceDate: '22-02-2017'
   }

];
@Component({
  selector: 'app-list-birth',
  templateUrl: './list-birth.component.html',
  styleUrls: ['./list-birth.component.scss']
})
export class ListBirthComponent implements OnInit {

  constructor() { }
  
  displayedColumns: string[] = [
    'did',
    'fname', 
    'lname', 
    'fatherDID',
    'motherDID',
    'age', 
    'gender', 
    'religion', 
    'city',
    'issueanceDate'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
