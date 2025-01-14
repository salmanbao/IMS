import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material';
import { InstallChaincodeComponent } from '../install-chaincode/install-chaincode.component';
import { InitiateCCComponent } from '../initiate-cc/initiate-cc.component';
import { PeerService } from 'app/services/peer.service';
import { ChaincodeService } from 'app/services/chaincode.service';


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
  peers: Array<string>;
  chaincodeName: string;
  chaincodeVersion: string;
  fcn: string;
  args: Array<string>;

  selected: any;
  displayedColumns: string[] = [
    'id',
    'version',
    'status',
    'action'
  ];

  listPeers: Array<string> = [];

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private peerService: PeerService,
    private chaincodeService: ChaincodeService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.loadPeers();
    this.listChaincode();
  }

  loadPeers() {
    this.peerService.getPeers().subscribe(
      res => {
        res.forEach(peer => {
          this.listPeers.push(peer.name);
        });
      },
      err => { console.log(err); }
    );
  }

  listChaincode() {
    this.chaincodeService.listChaincodes().subscribe(
      res => {
        const initiated = res.initiated;
        const installed = res.installed;
        const chaincodes = installed.concat(initiated);
        this.dataSource.data = chaincodes;
        this.dataSource._updateChangeSubscription();
      },
      err => { console.log(err); }
    );
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
      if (typeof result !== 'undefined') {
        this.openSnackBar(result.message);
      }
    });
  }

  openInitiateChaincodeDialog(CCname: string, CCversion: string): void {
    const dialogRef = this.dialog.open(InitiateCCComponent, {
      width: '50%',
      data: {
        cc_title: this.cc_title,
        peers: this.peers,
        chaincodeName: CCname,
        chaincodeVersion: CCversion,
        fcn: this.fcn,
        args: this.args
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (typeof result !== 'undefined') {
        this.openSnackBar(result);
      }
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
