import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from 'app/services/user.service';
import { User } from 'app/models/user';

export interface DialogData {
  title: string;
  username: string;
  orgName: string;
}

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

  organizations = ['Org1','Org2'];
  constructor(
    private userService:UserService,
    public dialogRef: MatDialogRef<AddMemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    data.title = 'Add User'
  }

  ngOnInit() {

  }

  register(){
    let user :User = new User() ;
    user.username = this.data.username;
    user.orgName = this.data.orgName;
    this.userService.register(user).subscribe(
      res=> {
        console.log(res);
        this.onNoClick();
      }
      ,
      err => {console.log(err);}
    )
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
