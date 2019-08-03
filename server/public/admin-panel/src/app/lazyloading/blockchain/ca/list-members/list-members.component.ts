import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {
  MatDialog,
  MatTableDataSource,
  MatSort,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBar
} from '@angular/material';
import { UserService } from 'app/services/user.service';
import { AddMemberComponent } from '../add-member/add-member.component';


export interface PeriodicElement {
  id: string;
  type: string;
  affiliation: string;
  attributes: Array<string>;
}
@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.scss']
})
export class ListMembersComponent implements OnInit {

  title: string;
  name: string;
  orgName: string;
  password: string;
  affliation: string;
  roles: Array<string>;
  users: Array<Object> = [];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  displayedColumns: string[] = [
    'id',
    'type',
    'affiliation',
    'attributes',
    'action'
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private ref: ChangeDetectorRef
  ) { }

  async ngOnInit() {
    this.dataSource.sort = this.sort;
    await this.getAllUsers();
    await this.ref.detectChanges();
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
                attributes: identity.attrs,
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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(AddMemberComponent, {
      width: '60%',
      data: {
        title: this.title,
        name: this.name,
        password: this.password,
        affliation: this.affliation,
        roles: this.roles,
        orgName: this.orgName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result !== 'undefined') {
        this.getAllUsers();
        this.openSnackBar(result['message']);
      }
    });
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
