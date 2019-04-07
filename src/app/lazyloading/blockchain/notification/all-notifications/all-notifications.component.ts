import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';


export interface PeriodicElement {
  name: {};
  timeUpdated: {};
  status: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: {
      "type": "Channel Request",
      "message": 'Join "School"'
    },
    timeUpdated: { 
      "by":"By:Org1",
      "date":'12/2/2019',
      "time":"11:08:23 AM"
    },
    status: 'Vote Pending',
    action: "pending"
  },
  {
    name: {
      "type": "Channel Request",
      "message": 'Join "Gov"'
    },
    timeUpdated: { 
      "by":"By:Org2",
      "date":'12/2/2019',
      "time":"11:08:23 AM"
    },
    status: 'Vote Pending',
    action: "pending"
  },
  {
    name: {
      "type": "Channel Request",
      "message": 'Join "HEC"'
    },
    timeUpdated: { 
      "by":"By:Org3",
      "date":'12/2/2019',
      "time":"11:08:23 AM"
    },
    status: 'Vote Pending',
    action: "pending"
  }

];
@Component({
  selector: 'app-all-notifications',
  templateUrl: './all-notifications.component.html',
  styleUrls: ['./all-notifications.component.scss']
})
export class AllNotificationsComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = [
    'name',
    'timeUpdated',
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

  checkClick() {
    console.log("clicked");
  }
}
