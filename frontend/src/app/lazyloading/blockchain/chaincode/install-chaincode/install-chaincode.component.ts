import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {ChaincodeService} from 'app/services/chaincode.service';
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private chain: ChaincodeService) {
    data.title = 'Install chaincode'
  }


  registerUser() {
    

    this.chain.add(this.data)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  ngOnInit() {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
