import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';
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
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private snackBar: MatSnackBar,
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
    if (data.title === 'Marriage Certificate') {
      this.addMarriage(data);
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
              if (response['success']) {
                this.openSnackBar(response['msg']);
              }
              const birthData = response['docs'].info;
              this.certificateService.addBirth(birthData).subscribe(
                finalResponse => {
                  if (finalResponse['success']) {
                    this.openSnackBar('Transaction successfully executed');
                  }
                },
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
    this.certificateService.approvenationalRequest(data).subscribe(
      res => {
        if (res['success']) {
          this.certificateService.getFromMongo({ path: 'nationalid', id: res['docs']._id }).subscribe(
            response => {
              if (response['success']) {
                this.openSnackBar(response['msg']);
              }
              const nationalData = response['docs'];
              console.log(nationalData);
              this.certificateService.addNationalId(nationalData).subscribe(
                finalResponse => {
                  if (finalResponse['success']) {
                    this.openSnackBar('Transaction successfully executed');
                  }
                },
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

  addMarriage(data) {
    this.certificateService.approvemarriageRequest(data).subscribe(
      res => {
        if (res['success']) {
          this.certificateService.getFromMongo({ path: 'marriage', id: res['docs']._id }).subscribe(
            response => {
              if (response['success']) {
                this.openSnackBar(response['msg']);
              }
              const marriageData = response['docs'];
              this.certificateService.addMarriage(marriageData.info).subscribe(
                finalResponse => {
                  if (finalResponse['success']) {
                    this.openSnackBar('Transaction successfully executed');
                  }
                },
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
    this.certificateService.getMarriageAll().subscribe(
      response => {
        this.dataSource.data = this.dataSource.data.concat(...response.docs);
        this.dataSource._updateChangeSubscription();
      },
      err => { console.log(err); }
    );
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
