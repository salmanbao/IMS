import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {
  MatTableDataSource, MatSort,
  MatDialog, MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition, MatSnackBar
} from '@angular/material';
import { AddPeerComponent } from '../add-peer/add-peer.component';
import { PeerService } from 'app/services/peer.service';

@Component({
  selector: 'app-list-peers',
  templateUrl: './list-peers.component.html',
  styleUrls: ['./list-peers.component.scss']
})
export class ListPeersComponent implements OnInit {
  blinker = true;
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
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private peerService: PeerService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private ref:ChangeDetectorRef
  ) {
    this.dataSource.sort = this.sort;
  }
  async ngOnInit() {
    await this.getPeers();
    await this.getOrderers();
    this.ref.detectChanges();
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
      if (result.message) {
        this.openSnackBar(result.message);
      } else if (result === 'fail') {
        this.openSnackBar('Unhandled exception might be occured');
      }
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
