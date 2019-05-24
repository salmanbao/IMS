import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar, MatDialog } from '@angular/material';
import { AddChannelComponent } from '../add-channel/add-channel.component';
import { RequestChannelComponent } from '../request-channel/request-channel.component';
import { ChannelService } from 'app/services/channel.service';


export interface PeriodicElement {
  id: string;
  timeCreated: string;
  blockHeight: Number;
  peers: Number;
  permissions: Array<string>;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 'gov',
    timeCreated: '12/2/2019',
    blockHeight: 20,
    peers: 6,
    permissions: ['Operator', 'Writer', 'Reader'],
    action: "block"
  },
  {
    id: 'univeristy',
    timeCreated: '12/4/2019',
    blockHeight: 34,
    peers: 3,
    permissions: ['Operator', 'Writer', 'Reader'],
    action: "unblock"
  },
  {
    id: 'School',
    timeCreated: '12/4/2019',
    blockHeight: 67,
    peers: 6,
    permissions: ['Operator', 'Writer', 'Reader'],
    action: "block"
  }

];



@Component({
  selector: 'app-managechannels',
  templateUrl: './managechannels.component.html',
  styleUrls: ['./managechannels.component.scss']
})
export class ManagechannelsComponent implements OnInit {

  title: string;
  channelName: string;
  channelFile: string;
  peers: Array<string>;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private channelService: ChannelService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }


  displayedColumns: string[] = [
    'id',
    'timeCreated',
    'blockHeight',
    'peers',
    'permissions',
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

  openDialog(): void {
    const dialogRef = this.dialog.open(AddChannelComponent, {
      width: '50%',
      data: {
        title: this.title,
        channelName: this.channelName,
        channelFile: this.channelFile

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  openDialogRequestChannel(): void {
    const dialogRef = this.dialog.open(RequestChannelComponent, {
      width: '50%',
      data: {
        title: this.title,
        channelName: this.channelName,
        peers: this.peers

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  openSnackBarSyncCertificate() {
    this.snackBar.open('Certificates has been synchronized', 'Close', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
