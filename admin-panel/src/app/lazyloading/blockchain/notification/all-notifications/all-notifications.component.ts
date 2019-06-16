import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CertificateService } from 'app/services/certificate.service';

@Component({
  selector: 'app-all-notifications',
  templateUrl: './all-notifications.component.html',
  styleUrls: ['./all-notifications.component.scss']
})
export class AllNotificationsComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'time',
    'status',
    'action'
  ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private certificateService: CertificateService
  ) { }
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.getAllCertificates();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  approveRequest(data) {
    if (data.title === 'Birth Certificate') {
      this.addBirth(data);
    }
    if (data.title === 'National ID') {
      this.addNational(data);
    }
  }

  rejectRequest(username: string) {
    this.certificateService.rejectBirthRequest({ username: username }).subscribe(
      res => { console.log(res); },
      err => { console.log(err); }
    );
  }

  addBirth(data) {
    this.certificateService.approveBirthRequest(data).subscribe(
      res => {
        if (res['success']) {
          this.certificateService.getFromMongo({ path: 'birth', id: res['docs']._id }).subscribe(
            response => {
              const birthData = response['docs'].info;
              this.certificateService.addBirth(birthData).subscribe(
                finalResponse => { console.log(finalResponse) },
                finalError => { console.log(finalError) }
              );
            },
            error => { console.log(error) }
          );
        }
      },
      err => { console.log(err); }
    );
  }

  addNational(data) {
    console.log(data);
    this.certificateService.approvenationalRequest(data).subscribe(
      res => {
        console.log(res);
        if (res['success']) {
          this.certificateService.getFromMongo({ path: 'nationalid', id: res['docs']._id }).subscribe(
            response => {
              const nationalData = response['docs'];
              console.log(nationalData);
              this.certificateService.addNationalId(nationalData).subscribe(
                finalResponse => { console.log(finalResponse) },
                finalError => { console.log(finalError) }
              );
            },
            error => { console.log(error) }
          );
        }
      },
      err => { console.log(err); }
    );
  }

  getAllCertificates() {
    this.certificateService.getBirthAll().subscribe(
      res => {
        this.dataSource.data = res.docs;
        this.dataSource._updateChangeSubscription();
      },
      err => { console.log(err); }
    );
    this.certificateService.getNationAll().subscribe(
      resp => {
        this.dataSource.data = this.dataSource.data.concat(...resp.docs);
        this.dataSource._updateChangeSubscription();
      },
      err => { console.log(err); }
    );
  }
}
