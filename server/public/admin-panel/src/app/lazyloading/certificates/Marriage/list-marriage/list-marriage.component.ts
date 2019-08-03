import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CertificateService } from 'app/services/certificate.service';

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

  displayedColumns: string[] = [
    'husband',
    'lname',
    'husbandDOB',
    'wifeDOB',
    'date',
    'familyNumber',
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  constructor(private certificateService: CertificateService) { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  getMarriage(did) {
    this.certificateService.getMarriage(did).subscribe(
      res => {
        const payload = JSON.parse(res['payload']);
        this.dataSource.data.push(payload);
        this.dataSource._updateChangeSubscription();
      },
      err => { console.log(err) }
    );

  }

}