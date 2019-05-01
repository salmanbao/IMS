import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ManagechannelsComponent } from '../managechannels/managechannels.component';
import { FormControl, Validators } from '@angular/forms';
import {CannelService} from 'app/services/cannel.service'

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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private canalService: CannelService) {
    data.title = 'Request For Joining Channel';
  }
  registerUser() {
    

    this.canalService.add(this.data)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.peers);
  }

}
