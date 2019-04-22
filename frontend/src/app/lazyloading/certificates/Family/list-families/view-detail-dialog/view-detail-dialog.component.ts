import { Component, OnInit, Inject } from '@angular/core';
import { ListFamiliesComponent } from '../list-families.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {

  title: string;
  fname: string;
  lname: string;
  motherName: string;
  age: Number;
  gender: string;
  religion: string;
  profession: string;
  maritialStatus: {};
  address: string;
  city: string;

}

@Component({
  selector: 'app-view-detail-dialog',
  templateUrl: './view-detail-dialog.component.html',
  styleUrls: ['./view-detail-dialog.component.scss']
})
export class ViewDetailDialogComponent implements OnInit {

  ngOnInit() {
  }

  constructor(
    public dialogRef: MatDialogRef<ListFamiliesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    data.title = 'Person Detail';
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
