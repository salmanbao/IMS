import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

export interface PeriodicElement {
  did: string;
  husband: string;
  wife: string;
  husbandDID: string;
  wifeDID: string;
  date: string;
  familyNumber: string;
  issueanceDate: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    did: 'G45YY56H76UI78I78',
    husband: 'Muhammad Salman',
    wife: 'Muhammad Saleem',
    husbandDID: "HG45Y54Y6UU67II7I78",
    wifeDID: "TYJH6J56U7I978OI87O87",
    date: 'Lahore',
    familyNumber: "LHR123",
    issueanceDate: '22-02-2017'
  }
];

@Component({
  selector: 'app-list-marriage',
  templateUrl: './list-marriage.component.html',
  styleUrls: ['./list-marriage.component.scss']
})
export class ListMarriageComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = [
    'did',
    'husband',
    'wife',
    'husbandDID',
    'wifeDID',
    'date',
    'familyNumber',
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
