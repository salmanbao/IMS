import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { InstallChaincodeComponent } from '../install-chaincode/install-chaincode.component';
import { InitiateCCComponent } from '../initiate-cc/initiate-cc.component';

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
  // Initiate dialog box variables
  cc_title: string;
  peers : Array<string>;
  chaincodeName: string;
  chaincodeVersion: string;
  fcn: string;
  args: Array<string>;


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
        chaincodeName: this.name,
        chaincodeVersion: this.version,
        chaincodeType: this.languageType,
        chaincodePath: this.selectedPath
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  openInitiateChaincodeDialog(): void {
    const dialogRef = this.dialog.open(InitiateCCComponent, {
      width: '50%',
      data: {
        cc_title: this.cc_title,
        peers: this.peers,
        chaincodeName: this.chaincodeName,
        chaincodeVersion: this.chaincodeVersion,
        fcn: this.fcn,
        args: this.args
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
