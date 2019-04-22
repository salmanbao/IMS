import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ManagechannelsComponent } from '../managechannels/managechannels.component';

export interface DialogData {
  title: string;
  channelName: string;
  channelFile:string;
} 

@Component({
  selector: 'app-add-channel',
  templateUrl: './add-channel.component.html',
  styleUrls: ['./add-channel.component.scss']
})
export class AddChannelComponent implements OnInit {

  channels = ['channel1','channel2'];
  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<ManagechannelsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      data.title ='Add Channel'; 
     }
     
    
  onNoClick(): void {
    this.dialogRef.close();
  }


}
 