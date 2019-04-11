import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  cc_title: string;
  cc_name: string;
  cc_version: string;
  cc_function: string;
  cc_arguments: string;
}

@Component({
  selector: 'app-initiate-cc',
  templateUrl: './initiate-cc.component.html',
  styleUrls: ['./initiate-cc.component.scss']
})
export class InitiateCCComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InitiateCCComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    data.cc_title = 'Initiate chaincode'
  }

  ngOnInit() {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
