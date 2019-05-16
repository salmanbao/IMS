import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { AddPeerComponent } from '../add-peer/add-peer.component';
import { PeerService } from 'app/services/peer.service';

export interface PeriodicElement {
  name: string;
  route: string;
  type: string;
  mspId: string;
}


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
    private peerService:PeerService,
    public dialog: MatDialog
    ) { 
    this.dataSource.sort = this.sort;
    }

  @ViewChild(MatSort) sort: MatSort;
  blinker: boolean = true;
  ngOnInit() {
    this.peerService.getPeers().subscribe(
      res =>{
        res.forEach(peer => {
          this.dataSource.data.push(peer);
          this.dataSource._renderChangesSubscription;
        });
      },
      err=>{ console.log(err);}
    );
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
