import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

export interface PeriodicElement {
  id: string;
  type: string;
  affiliation: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 'admin',
    type: 'Client',
    affiliation: 'msp PeerOrg2',
    action: "<button>Generate Certificate</button>"
  },
  {
    id: 'univeristy',
    type: 'Peer',
    affiliation: 'mspPeerOrg1',
    action: ""
  }
];

@Component({
  selector: 'app-manage-certificates-authority',
  templateUrl: './manage-certificates-authority.component.html',
  styleUrls: ['./manage-certificates-authority.component.scss']
})
export class ManageCertificatesAuthorityComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = [
    'id',
    'type',
    'affiliation',
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
