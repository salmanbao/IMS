import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { AddPeerComponent } from '../add-peer/add-peer.component';
import { PeerService } from 'app/services/peer.service';

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

  displayedColumns: string[] = [
    'name',
    'route',
    'type',
    'mspId'
  ];
  dataSource = new MatTableDataSource();
  constructor(
    private peerService: PeerService,
    public dialog: MatDialog
  ) {
    this.dataSource.sort = this.sort;
  }

  // tslint:disable-next-line: member-ordering
  @ViewChild(MatSort) sort: MatSort;
  blinker: boolean = true;
  ngOnInit() {
    this.getPeers();
    this.getOrderers();
  }

  getOrderers() {
    this.peerService.getOrderers().subscribe(
      res => {
        res.orderers.forEach(orderer => {
          let or = this.buildOrderer(orderer, res.mspId);
          this.dataSource.data.push(or);
          this.dataSource._updateChangeSubscription();
        });
      },
      err => { console.log(err); }
    );
  }

  getPeers() {
    this.peerService.getPeers().subscribe(
      res => {
        res.forEach(peer => {
          this.dataSource.data.push(peer);
          this.dataSource._updateChangeSubscription();
        });
      },
      err => { console.log(err); }
    );
  }

  buildOrderer(orderer, mspId): any {
    return { name: orderer._name, route: orderer._url, mspId, type: 'Orderer' };
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
