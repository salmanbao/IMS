import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatSort } from '@angular/material';
import { UserService } from 'app/services/user.service';
import { AddMemberComponent } from '../add-member/add-member.component';


export interface PeriodicElement {
  id: string;
  type: string;
  affiliation: string;
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
  users: Array<Object> = [];

  constructor(
    public dialog: MatDialog,
    private userService: UserService
  ) { }
  displayedColumns: string[] = [
    'id',
    'type',
    'affiliation',
    'action'
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.getAllUsers();
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
        }
        else {
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
        orgName: this.orgName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
