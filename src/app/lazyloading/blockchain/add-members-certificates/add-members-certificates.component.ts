import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { AddMemberCertificatesDialogComponent } from './add-member-certificates-dialog/add-member-certificates-dialog.component';


export interface PeriodicElement {
  name: string;
  dateAdded: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'john@gmail.com',
    dateAdded: 'PeerOrg1',
    action: "block"
  },
  {
    name: 'johndoe@gmail.com',
    dateAdded: 'PeerOrg1',
    action: "unblock"
  },
  {
    name: 'doe@gmail.com',
    dateAdded: 'PeerOrg1',
    action: "block"
  }

];

@Component({
  selector: 'app-add-members-certificates',
  templateUrl: './add-members-certificates.component.html',
  styleUrls: ['./add-members-certificates.component.scss']
})
export class AddMembersCertificatesComponent implements OnInit {

  title: string;
  name: string;
  certificate:string;
    
  constructor(public dialog: MatDialog) { }
  displayedColumns: string[] = [
    'name',
    'dateAdded',
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
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddMemberCertificatesDialogComponent, {
      width: '50%',
      data: {  
        title: this.title,
        name: this.name,
        certificate:this.certificate

       }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}