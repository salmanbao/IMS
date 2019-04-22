import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { AddMemberComponent } from '../add-member/add-member.component';

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

  title: string;
  name: string;
  orgName: string;

  constructor(
    public dialog: MatDialog
  ) { }
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
