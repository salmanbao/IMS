import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';


export interface PeriodicElement {
  id: string;
  timeCreated: string;
  blockHeight: Number;
  peers: Number;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 'gov',
    timeCreated: '12/2/2019',
    blockHeight: 20,
    peers: 6,
    action: "block"
  },
  {
    id: 'univeristy',
    timeCreated: '12/4/2019',
    blockHeight: 34,
    peers: 3,
    action: "unblock"
  },
  {
    id: 'School',
    timeCreated: '12/4/2019',
    blockHeight: 67,
    peers: 6,
    action: "block"
  }

];

@Component({
  selector: 'app-managechannels',
  templateUrl: './managechannels.component.html',
  styleUrls: ['./managechannels.component.scss']
})
export class ManagechannelsComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = [
    'id',
    'timeCreated',
    'blockHeight',
    'peers',
    'action'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  checkClick(){
    console.log("clicked"); 
  }

}
