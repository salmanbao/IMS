import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { AddMemberDialogComponent } from './add-member-dialog/add-member-dialog.component';


export interface PeriodicElement {
  member: {};
  msp: string;
  requester: string;
  status: string;
  action: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    member: {
      "org": "Org1",
      "email": 'john@gmail.com'
    },
    msp: 'PeerOrg1',
    requester: 'john@gmail.com',
    status: "Joined",
    action: false
  },
  {
    member: {
      "org": "Org1",
      "email": 'johndoe@gmail.com'
    },
    msp: 'PeerOrg1',
    requester: 'johndoe@gmail.com',
    status: "Pending",
    action: true
  },
  {
    member: {
      "org": "Org1",
      "email": 'doe@gmail.com'
    },
    msp: 'PeerOrg1',
    requester: 'doe@gmail.com',
    status: "Joined",
    action: false
  }

];

@Component({
  selector: 'app-list-org-members',
  templateUrl: './list-org-members.component.html',
  styleUrls: ['./list-org-members.component.scss']
})
export class ListOrgMembersComponent implements OnInit {
  title: string;
  Orgname: string;
  OperatorName:string;
  constructor(public dialog: MatDialog) {

  }
  displayedColumns: string[] = [
    'member',
    'msp',
    'requester',
    'status',
    'action'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  blinker: boolean = true;
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddMemberDialogComponent, {
      width: '50%',
      data: {  
        title: this.title,
        Orgname: this.Orgname,
        OperatorName:this.OperatorName

       }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }


}
