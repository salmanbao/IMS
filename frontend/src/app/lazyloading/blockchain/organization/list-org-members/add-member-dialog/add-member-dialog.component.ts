import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MemberService } from 'app/services/member.service';


export interface DialogData {
  title: string;
  Orgname: string;
  OperatorName: string;
}

@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.scss']
})
export class AddMemberDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AddMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData  ,
    private memberservice: MemberService)
     {
    data.title = 'Add Member (organization)'

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
