import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { ViewDetailDialogComponent } from './view-detail-dialog/view-detail-dialog.component';

export interface PeriodicElement {
  did: string;
  fname: string;
  lname: string;
  fatherDID: string;
  motherDID: string;
  familyNumber: Array<string>;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    did: 'G45YY56H76UI78I78',
    fname: 'Muhammad Salman',
    lname: 'Muhammad Saleem',
    fatherDID: "HG45Y54Y6UU67II7I78",
    motherDID: "TYJH6J56U7I978OI87O87",
    familyNumber: ['LHR1234']

  }
];


@Component({
  selector: 'app-list-families',
  templateUrl: './list-families.component.html',
  styleUrls: ['./list-families.component.scss']
})
export class ListFamiliesComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }
  
  //----------Personal deatails variable-------------//

  title: string;
  fname: string;
  lname: string;
  motherName: string;
  age: Number;
  gender: string;
  religion: string;
  profession: string;
  maritialstatus: {};
  address: string;
  city: string;

  //------------------------End-----------------------//

  displayedColumns: string[] = [
    'did',
    'fname',
    'lname',
    'fatherDID',
    'motherDID',
    'familyNumber',
    'actions'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openViewDetailDialog(): void {
    const dialogRef = this.dialog.open(ViewDetailDialogComponent, {
      width: '60%',
      data: {
        title: this.title,
        fname: this.fname,
        lname: this.lname,
        motherName: this.motherName,
        age: this.age,
        gender:this.gender,
        religion:this.religion,
        profession:this.profession,
        maritialStatus:this.maritialstatus,
        address:this.address,
        city:this.city

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}

