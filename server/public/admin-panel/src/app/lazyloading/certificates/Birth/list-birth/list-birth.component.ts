import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CertificateService } from 'app/services/certificate.service';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-list-birth',
  templateUrl: './list-birth.component.html',
  styleUrls: ['./list-birth.component.scss']
})
export class ListBirthComponent implements OnInit {

  displayedColumns: string[] = [
    'fname',
    'lname',
    'father',
    'mother',
    'dob',
    'gender',
    'religion',
    'city'
  ];
  dataSource = new MatTableDataSource();
  did = new FormControl('', Validators.required);

  @ViewChild(MatSort) sort: MatSort;
  constructor(private certificateService: CertificateService) { }
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  getBirth(did) {
    console.log(did);
    this.certificateService.getBirth(did).subscribe(
      res => {
        const payload = JSON.parse(res['payload']);
        this.dataSource.data.push(payload);
        this.dataSource._updateChangeSubscription();
      },
      err => { console.log(err) }
    );

  }
}
