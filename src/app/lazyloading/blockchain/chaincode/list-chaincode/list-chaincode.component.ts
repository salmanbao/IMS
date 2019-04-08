import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { InstallChaincodeComponent } from '../install-chaincode/install-chaincode.component';

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
  selector: 'app-list-chaincode',
  templateUrl: './list-chaincode.component.html',
  styleUrls: ['./list-chaincode.component.scss']
})
export class ListChaincodeComponent implements OnInit {

  title: string;
  name: string;
  version: string;
  languageType: string;
  choosedFiles: string;
  selectedPath: string;

  selected: any;
  constructor(
    public dialog: MatDialog
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
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openInstallChaincodeDialog(): void {
    const dialogRef = this.dialog.open(InstallChaincodeComponent, {
      width: '80%',
      data: {
        title: this.title,
        name: this.name,
        version: this.version,
        languageType: this.languageType,
        choosedFiles: this.choosedFiles,
        selectedPath: this.selectedPath
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
