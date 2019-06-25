import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CertificateService } from 'app/services/certificate.service';

export interface PeriodicElement {
  did: string;
  fname: string;
  lname: string;
  fatherDID: string;
  motherDID: string;
  city: string;
  age: Number;
  gender: string;
  religion: string;
  familyNumber: string;

}

@Component({
  selector: 'app-listnationalid',
  templateUrl: './listnationalid.component.html',
  styleUrls: ['./listnationalid.component.scss']
})


export class ListnationalidComponent implements OnInit {
  displayedColumns: string[] = [
    'fname',
    'lname',
    'father',
    'mother',
    'dob',
    'gender',
    'religion',
    'city',
    'familyNumber'
  ];

  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  constructor(private certificateService: CertificateService) { }


  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  getNational(username) {
    console.log(username);
    this.certificateService.getNational(username).subscribe(
      res => {
        const payload = JSON.parse(res['payload']);
        this.dataSource.data.push(payload);
        this.dataSource._updateChangeSubscription();
      },
      err => { console.log(err) }
    );

  }
}