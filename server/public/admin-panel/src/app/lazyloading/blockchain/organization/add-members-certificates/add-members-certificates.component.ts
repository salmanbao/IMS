import { Component, OnInit, ViewChild } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { MatTableDataSource, MatSort, MatDialog, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';
import { AddMemberCertificatesDialogComponent } from './add-member-certificates-dialog/add-member-certificates-dialog.component';
import { UserService } from 'app/services/user.service';
import { AuthenticationService } from 'app/services/authentication.service';


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
    private userService: UserService,
    private auth: AuthenticationService
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
          this.users = [];
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

  revokeUser(revokedUser) {
    const user = this.auth.getUser();
    user.revokeUser = revokedUser;
    this.userService.revokeUser(user).subscribe(
      res => {
        console.log(res);
        if (res['success']) {
          if (res['result'].RevokedCerts !== null) {
            this.openSnackBarCertificate('Successfully revoked');
          } else {
            this.openSnackBarCertificate('Already revoked');
          }
        } else {
          this.openSnackBarCertificate(res['message']);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  reEnroll(enrollUser) {
    const user = this.auth.getUser();
    user.enrollUser = enrollUser;
    this.userService.enrollUser(user).subscribe(
      res => {
        this.openSnackBarCertificate(res['message'])
      },
      err => {
        console.log(err);
      }
    );
  }
  deleteUser(removeUser) {
    const user = this.auth.getUser();
    user.removeUser = removeUser;
    this.userService.removeUser(user).subscribe(
      res => {
        if (res['success']) {
          this.getAllUsers();
          this.openSnackBarCertificate('Successfully deleted user');
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  openSnackBarCertificate(msg) {
    this.snackBar.open(msg, 'Close', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}