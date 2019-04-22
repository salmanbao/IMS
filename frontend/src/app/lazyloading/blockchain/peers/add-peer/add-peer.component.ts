import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


export interface DialogData {
  title: string;
  name: string;
  route: string;
  type: string;
  mspId: string;
}

@Component({
  selector: 'app-add-peer',
  templateUrl: './add-peer.component.html',
  styleUrls: ['./add-peer.component.scss']
})
export class AddPeerComponent implements OnInit {

  types = ['peer','ca','orderer'];
  msps = ['gov','school'];
  constructor(
    public dialogRef: MatDialogRef<AddPeerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    data.title = 'Add Node'
  }

  ngOnInit() {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
