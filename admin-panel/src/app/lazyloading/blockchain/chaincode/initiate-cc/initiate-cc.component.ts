import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChaincodeService } from 'app/services/chaincode.service';
import { FormControl, Validators } from '@angular/forms';
import { InitiateChaincode } from 'app/models/chaincode';

export interface DialogData {
  cc_title: string;
  peers: Array<string>;
  chaincodeName: string;
  chaincodeVersion: string;
  chaincodeType: string;
  fcn: string;
  args: Array<string>;
}

@Component({
  selector: 'app-initiate-cc',
  templateUrl: './initiate-cc.component.html',
  styleUrls: ['./initiate-cc.component.scss']
})
export class InitiateCCComponent implements OnInit {
  peers = new FormControl('', Validators.required);
  peersList = ['peer0.org1.example.com', 'peer1.org1.example.com'];
  languages = ['golang', 'node'];
  constructor(
    private chaincodeService: ChaincodeService,
    public dialogRef: MatDialogRef<InitiateCCComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    data.cc_title = 'Initiate chaincode';
    data.fcn = '';
    data.args = [''];
  }

  ngOnInit() {

  }
  initiateChaincode() {
    const chaincodeConfig: InitiateChaincode = new InitiateChaincode(this.data);
    this.chaincodeService.initiateChaincode(chaincodeConfig).subscribe(
      res => {
        if (res['success']) {
          this.onNoClick(res['message']);
        }
      },
      err => { this.onNoClick(err) }
    );
  }
  onNoClick(result): void {
    this.dialogRef.close(result);
  }
}
