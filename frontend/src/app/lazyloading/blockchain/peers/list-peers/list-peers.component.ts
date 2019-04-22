import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { AddPeerComponent } from '../add-peer/add-peer.component';

export interface PeriodicElement {
  name: string;
  route: string;
  type: string;
  mspId: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'peer0.ims.com',
    route: 'grpc://localhost:2030',
    type: 'Peer(Member)',
    mspId: 'Gov',
  },
  {
    name: 'orderer.ims.com',
    route: 'grpc://localhost:2130',
    type: 'Orderer',
    mspId: 'Gov',
  },
  {
    name: 'govca.ims.com',
    route: 'grpc://localhost:2131',
    type: 'CA',
    mspId: 'Gov',
  },

];
@Component({
  selector: 'app-list-peers',
  templateUrl: './list-peers.component.html',
  styleUrls: ['./list-peers.component.scss']
})
export class ListPeersComponent implements OnInit {

  title: string;
  name: string;
  route: string;
  type: string;
  mspId: string;

  constructor(public dialog: MatDialog) { }
  displayedColumns: string[] = [
    'name',
    'route',
    'type',
    'mspId'
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
    const dialogRef = this.dialog.open(AddPeerComponent, {
      width: '50%',
      data: {
        title: this.title,
        name: this.name,
        route: this.route,
        type: this.type,
        mspId: this.mspId
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
