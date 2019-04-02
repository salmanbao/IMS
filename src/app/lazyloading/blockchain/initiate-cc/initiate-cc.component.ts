import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface PeriodicElement {
  id: string;
  version: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 'identity',
    version: '1.0.0',
    action: ""
  }
];
@Component({
  selector: 'app-initiate-cc',
  templateUrl: './initiate-cc.component.html',
  styleUrls: ['./initiate-cc.component.scss']
})
export class InitiateCCComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }
  displayedColumns: string[] = [
    'id',
    'version',
    'action'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.addForm = this._formBuilder.group({
      peers: ['', null],
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  checkClick() {
    console.log("clicked");
  }

}
