import { Component, OnInit , ViewChild} from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

export interface PeriodicElement {
  did:  string;
  fname: string;
  lname: string;
  street: string;
  district: string;
  division: string;
  city: string;
  province: string;
  age: Number;
  gender: string;
  religion: string;
  familyNumber: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    did: '1122-2233-1111',
    fname: 'Muhammad Salman',
    lname:'Muhammad Saleem',
    street:'lahore',
    district:'Lahore Cantt',
    division:'Lahore',
    city: 'Lahore',
    province: 'Punjab',
    age: 21,
    gender: 'male',
    religion: 'Islam',
    familyNumber:'11RT34'
   }
  //{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //{position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-listnationalid',
  templateUrl: './listnationalid.component.html',
  styleUrls: ['./listnationalid.component.scss']
})


export class ListnationalidComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = [
    'did',
    'fname', 
    'lname', 
    'age', 
    'gender', 
    'religion', 
    'city',
    'district',
    'division',
    'province',
    'familyNumber'
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
