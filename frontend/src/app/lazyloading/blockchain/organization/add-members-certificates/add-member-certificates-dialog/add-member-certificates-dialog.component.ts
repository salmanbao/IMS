import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddMembersCertificatesComponent } from '../add-members-certificates.component';

export interface DialogData {
  title: string;
  Orgname: string;
  OperatorName:string;
}

@Component({
  selector: 'app-add-member-certificates-dialog',
  templateUrl: './add-member-certificates-dialog.component.html',
  styleUrls: ['./add-member-certificates-dialog.component.scss']
})
export class AddMemberCertificatesDialogComponent implements OnInit {

  ngOnInit() {
  } 
  
  constructor(
    public dialogRef: MatDialogRef<AddMembersCertificatesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      data.title ='Add Certificate' 
     }
     
    
  onNoClick(): void {
    this.dialogRef.close();
  }

}
