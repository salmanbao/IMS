import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

export interface PeriodicElement {
  member: string;
  msp: string;
  requester: string;
  status: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    member: 'john@gmail.com',
    msp: 'PeerOrg1',
    requester: 'john@gmail.com',
    status: "joined",
    action: "block"
  },
  {
    member: 'johndoe@gmail.com',
    msp: 'PeerOrg1',
    requester: 'johndoe@gmail.com',
    status: "pending",
    action: "unblock"
  },
  {
    member: 'doe@gmail.com',
    msp: 'PeerOrg1',
    requester: 'doe@gmail.com',
    status: "Joined",
    action: "block"
  }

];

@Component({
  selector: 'app-list-org-members',
  templateUrl: './list-org-members.component.html',
  styleUrls: ['./list-org-members.component.scss']
})
export class ListOrgMembersComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = [
    'member',
    'msp',
    'requester',
    'status',
    'action'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
