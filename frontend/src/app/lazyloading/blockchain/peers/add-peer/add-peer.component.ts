import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PeerService } from 'app/services/peer.service';

export interface DialogData {
  title: string;
  name: string;
  // route: string;
  // type: string;
  // mspId: string;
}

@Component({
  selector: 'app-add-peer',
  templateUrl: './add-peer.component.html',
  styleUrls: ['./add-peer.component.scss']
})
export class AddPeerComponent implements OnInit {

  constructor(
    private peerService: PeerService,
    public dialogRef: MatDialogRef<AddPeerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    data.title = 'Join Channel'
  }

  ngOnInit() {
  }

  joinPeer() {
    const peerDetails = {
      peers : [this.data.name]
    };
    this.peerService.joinChannel(peerDetails).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );

    console.log(peerDetails);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
