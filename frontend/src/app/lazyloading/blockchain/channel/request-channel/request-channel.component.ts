import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ManagechannelsComponent } from '../managechannels/managechannels.component';
import { FormControl, Validators } from '@angular/forms';

export interface DialogData {
  title: string;
  channelName: string;
  peers: Array<string>;
}
@Component({
  selector: 'app-request-channel',
  templateUrl: './request-channel.component.html',
  styleUrls: ['./request-channel.component.scss']
})
export class RequestChannelComponent implements OnInit {
  peers = new FormControl('',Validators.required);
  channels = ['channel1', 'channel2'];
  peersList = ['localhost:9001', 'localhost:9002'];
  ngOnInit() {
  }
  constructor(
    public dialogRef: MatDialogRef<ManagechannelsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    data.title = 'Request For Joining Channel';
  }


  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.peers);
  }

}
