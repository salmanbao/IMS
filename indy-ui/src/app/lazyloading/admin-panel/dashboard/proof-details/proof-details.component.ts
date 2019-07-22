import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  title: string;
  proof: {};
}
@Component({
  selector: 'app-proof-details',
  templateUrl: './proof-details.component.html',
  styleUrls: ['./proof-details.component.scss']
})
export class ProofDetailsComponent implements OnInit {
  attrs = Object.keys(this.data.proof['request'].requested_attributes);
  constructor(
    public dialogRef: MatDialogRef<ProofDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    data.title = 'Proof Details'
  }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}


