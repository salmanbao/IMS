import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatTableDataSource,
  MatSort,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBar,
  MatDialog
} from '@angular/material';
import { AddChannelComponent } from '../add-channel/add-channel.component';
import { RequestChannelComponent } from '../request-channel/request-channel.component';
import { ChannelService } from 'app/services/channel.service';

@Component({
  selector: 'app-managechannels',
  templateUrl: './managechannels.component.html',
  styleUrls: ['./managechannels.component.scss']
})
export class ManagechannelsComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'blockHeight',
    'peers',
    'action'
  ];
  dataSource = new MatTableDataSource();
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



  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.getChannelInfo()
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getChannelInfo() {
    this.channelService.getChannelInfo().subscribe(
      res => {
        console.log(res);
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
      },
      err => {
        console.log(err);
      }
    );
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
      if (result.message) {
        this.openSnackBar(result.message);
      } else if (result === 'fail') {
        this.openSnackBar('Unhandled exception might be occured');
      }

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



  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
