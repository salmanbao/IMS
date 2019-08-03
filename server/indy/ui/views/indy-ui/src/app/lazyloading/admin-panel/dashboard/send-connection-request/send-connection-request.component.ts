import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from 'app/services/api.service';

export interface DialogData {
  title: string;
  did: string;
}
@Component({
  selector: 'app-send-connection-request',
  templateUrl: './send-connection-request.component.html',
  styleUrls: ['./send-connection-request.component.scss']
})
export class SendConnectionRequestComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SendConnectionRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private indyAPI: ApiService
  ) { }

  ngOnInit() {
  }

  sendConnectionRequest() {
    if (this.data.did) {
      this.indyAPI.sendConnectionrequest({ did: this.data.did }).subscribe(
        res => { this.onCompletion(res) },
        err => { console.log(err) }
      );
    }

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  onCompletion(result){
    this.dialogRef.close(result);
  }
}
