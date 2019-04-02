import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';


export interface PeriodicElement {
  name: string;
  dateAdded: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'john@gmail.com',
    dateAdded: 'PeerOrg1',
    action: "block"
  },
  {
    name: 'johndoe@gmail.com',
    dateAdded: 'PeerOrg1',
    action: "unblock"
  },
  {
    name: 'doe@gmail.com',
    dateAdded: 'PeerOrg1',
    action: "block"
  }

];

@Component({
  selector: 'app-add-members-certificates',
  templateUrl: './add-members-certificates.component.html',
  styleUrls: ['./add-members-certificates.component.scss']
})
export class AddMembersCertificatesComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = [
    'name',
    'dateAdded',
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
