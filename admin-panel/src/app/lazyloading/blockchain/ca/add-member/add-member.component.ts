import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from 'app/services/user.service';
import { User } from 'app/models/user';

export interface DialogData {
  title: string;
  username: string;
  password: string;
  affliation: string;
  role: string;
  orgName: string;
  attributes: Array<string>;
}

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {
  hide = true;
  organizations = ['Org1', 'Org2'];
  types = ['CLIENT', 'ORDERER', 'PEER', 'USER'];
  affliations = ['org1.department1', 'ims'];
  attributes = [
    'HF REGISTRAR DELEGATE ROLES',
    'HF REGISTRAR ATTRIBUTES',
    'HF AFFILIATION MGR',
    'HF REGISTRAR ROLES',
    'HFINTERMEDIATECA',
    'HF REVOKER',
    'HF GEN CRL'
  ];
  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<AddMemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    data.title = 'Add User'
  }

  ngOnInit() {

  }

  register() {
    const user: User = new User();
    user.username = this.data.username;
    user.password = this.data.password;
    user.affiliation = this.data.affliation;
    user.role = this.data.role;
    user.orgName = this.data.orgName;
    user.attributes = this.data.attributes;
    this.userService.register(user).subscribe(
      result => {
        this.onNoClick(result);
      }
      ,
      err => { console.log(err); }
    )
  }
  onNoClick(result): void {
    this.dialogRef.close(result);
  }

}
