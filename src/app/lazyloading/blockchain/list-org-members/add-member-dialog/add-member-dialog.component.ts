import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  title: string;
  Orgname: string;
  OperatorName:string;
}

@Component({ 
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.scss']
})
export class AddMemberDialogComponent {
  
  constructor(
    public dialogRef: MatDialogRef<AddMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      data.title ='Add Member (organization)' 
     }
     
    
  onNoClick(): void {
    this.dialogRef.close();
  }

 

}
