import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { CertificateService } from 'app/services/certificate.service';

@Component({
  selector: 'app-completed-notifications',
  templateUrl: './completed-notifications.component.html',
  styleUrls: ['./completed-notifications.component.scss']
})
export class CompletedNotificationsComponent implements OnInit {
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

  approveRequest(username: string) {
    this.certificateService.approveBirthRequest({ username: username }).subscribe(
      res => { console.log(res); },
      err => { console.log(err); }
    );
  }

  rejectRequest(username: string) {
    this.certificateService.rejectBirthRequest({ username: username }).subscribe(
      res => { console.log(res); },
      err => { console.log(err); }
    );
  }

  getAllCertificates() {
    this.certificateService.getAll().subscribe(
      res => {
        this.dataSource.data = res.docs.filter((doc) => {
          if (doc.status === 'approve') {
            return doc;
          }
        });
        this.dataSource._updateChangeSubscription();
      },
      err => { console.log(err); }
    );
  }

}
