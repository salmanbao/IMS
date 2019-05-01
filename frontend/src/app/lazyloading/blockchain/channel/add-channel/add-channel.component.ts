import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ManagechannelsComponent } from '../managechannels/managechannels.component';
import {CannelService} from 'app/services/cannel.service'

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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private canalService: CannelService) {
      data.title ='Add Channel'; 
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
  }


}
 