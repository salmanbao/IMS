import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {CertificatechainService} from 'app/services/certificatechain.service';
export interface DialogData {
  title: string;
  name: string;
  orgName: string;
}

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

  organizations = ['Gov','Hec'];
  constructor(
    public dialogRef: MatDialogRef<AddMemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private certifcate: CertificatechainService ) {
    data.title = 'Add User'
  }

  registerUser() {
    

    this.certifcate.add(this.data)
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
