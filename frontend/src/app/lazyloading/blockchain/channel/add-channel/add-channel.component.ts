import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ManagechannelsComponent } from '../managechannels/managechannels.component';
import { ChannelService } from 'app/services/channel.service';

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

  channels:any;
  ngOnInit() {
    this.channelService.getChannelFiles().subscribe(
      res=>{
        this.channels = res;
      }
    );
  }

  constructor(
    private channelService: ChannelService,
    public dialogRef: MatDialogRef<ManagechannelsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      data.title ='Add Channel'; 
     }
     
  addChannel(){
    let channelDetails = {
      channelName : this.data.channelName,
      channelFile : this.data.channelFile
    };
    this.channelService.addChannel(channelDetails).subscribe(
      res=>{
        if(res['success']){
          this.onNoClick();
        }
      } 
    );
  }
    
  onNoClick(): void {
    this.dialogRef.close();
  }

}
 
