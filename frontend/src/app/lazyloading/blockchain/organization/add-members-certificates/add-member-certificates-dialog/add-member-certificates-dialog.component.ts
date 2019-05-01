import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddMembersCertificatesComponent } from '../add-members-certificates.component';
import { MemberService } from 'app/services/member.service';
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private memberservice: MemberService) {
      data.title ='Add Certificate' 
     }
     
     registerUser() {
    

      this.memberservice.add(this.data)
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
