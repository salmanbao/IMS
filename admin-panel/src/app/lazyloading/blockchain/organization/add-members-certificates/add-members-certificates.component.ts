import { Component, OnInit, ViewChild } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { MatTableDataSource, MatSort, MatDialog, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';
import { AddMemberCertificatesDialogComponent } from './add-member-certificates-dialog/add-member-certificates-dialog.component';
import { UserService } from 'app/services/user.service';


export interface PeriodicElement {
  id: string;
  type: string;
  affiliation: string;
}

@Component({
  selector: 'app-add-members-certificates',
  templateUrl: './add-members-certificates.component.html',
  styleUrls: ['./add-members-certificates.component.scss']
})
export class AddMembersCertificatesComponent implements OnInit {

  title: string;
  name: string;
  certificate: string;
  users: Array<Object> = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  displayedColumns: string[] = [
    'id',
    'type',
    'affiliation',
    'action'
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) { }
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.getAllUsers();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddMemberCertificatesDialogComponent, {
      width: '50%',
      data: {
        title: this.title,
        name: this.name,
        certificate: this.certificate

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      res => {
        const response = res.valueOf();
        if (response['success']) {
          response['result'].forEach(identity => {
            this.users.push(
              {
                id: identity.id,
                type: identity.type,
                affiliation: identity.affiliation,
              }
            );
          });
          this.dataSource.data = this.users;
          this.dataSource._updateChangeSubscription();
        } else {
          this.dataSource.data = [];
        }
      },
      err => { console.log(err); }
    );
  }

  openSnackBarCertificate() {
    this.snackBar.open('Certificate has been revoked', 'Close', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  openSnackBarSyncCertificate() {
    this.snackBar.open('Certificate has been synchronized', 'Close', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}