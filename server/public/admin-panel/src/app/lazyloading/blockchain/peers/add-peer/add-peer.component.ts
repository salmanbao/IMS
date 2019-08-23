import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PeerService } from 'app/services/peer.service';
import { ChannelService } from 'app/services/channel.service';

export interface DialogData {
  title: string;
  name: string;
  // type: string;
  // mspId: string;
}

@Component({
  selector: 'app-add-peer',
  templateUrl: './add-peer.component.html',
  styleUrls: ['./add-peer.component.scss']
})
export class AddPeerComponent implements OnInit {

  channel: string;
  Channels: Array<string> = [];
  Peers: Array<string> = [];
  constructor(
    private peerService: PeerService,
    private channelService: ChannelService,
    public dialogRef: MatDialogRef<AddPeerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    data.title = 'Join Channel'
  }


  ngOnInit() {
    this.getPeers();
    this.channel = this.channelService.getCurrentChannel();
    console.log(this.channel);
  }

  joinPeer() {
    const peerDetails = {
      peers: [this.data.name],
      channel: this.channel
    };
    this.peerService.joinChannel(peerDetails).subscribe(
      res => {
        this.dialogRef.close(res);
      },
      err => {
        this.dialogRef.close(err);
      }
    );
  }

  getChannels() {
    this.channelService.getChannels().subscribe(
      res => {
        res.forEach((channel) => {
          this.Channels.push(channel.name);
        });
      },
      err => { console.log(err); }
    );
  }

  getPeers() {
    this.peerService.getPeers().subscribe(
      res => {
        res.forEach(peer => {
          this.Peers.push(peer.name);
        });
      },
      err => { console.log(err); }
    );
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }
}
