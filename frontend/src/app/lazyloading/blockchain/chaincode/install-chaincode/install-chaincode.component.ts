import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  title: string;
  name: string;
  version: string;
  languageType: string;
  choosedFiles: string;
  selectedPath: string;
}

@Component({
  selector: 'app-install-chaincode',
  templateUrl: './install-chaincode.component.html',
  styleUrls: ['./install-chaincode.component.scss']
})
export class InstallChaincodeComponent implements OnInit {

  languages = ['Golang', 'Javascript'];
  paths = ['gov', 'hec'];
  constructor(
    public dialogRef: MatDialogRef<InstallChaincodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    data.title = 'Install chaincode'
  }

  ngOnInit() {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
