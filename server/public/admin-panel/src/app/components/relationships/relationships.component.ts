import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar, MatDialog } from '@angular/material';
import { ApiService } from 'app/services/api.service';
import { ProofDetailsComponent } from './proof-details/proof-details.component';
import { SendConnectionRequestComponent } from './send-connection-request/send-connection-request.component';

@Component({
  selector: 'app-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.scss']
})
export class RelationshipsComponent implements OnInit {

  name;
  schemas;
  relationships;
  credentialDefinitions;
  credentials;
  endpointDid;
  messageTypes;
  messages;
  proofRequests;

  loading = false;
  isSelected = false;
  selected = {};
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private changeDetect: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private indyAPI: ApiService
  ) { }
  ngOnInit() {
    this.indyAPI.loadGeneralInfo().subscribe(
      res => {
        this.name = res['name'];
        this.schemas = res['schemas'];
        this.credentialDefinitions = res['credentialDefinitions'];
        this.credentials = res['credentials'];
        this.endpointDid = res['endpointDid'];
        this.messageTypes = res['messageTypes'];
        this.messages = res['messages'];
        this.proofRequests = res['proofRequests'];
        this.relationships = res['relationships'];
        console.log(res);
        this.changeDetect.detectChanges();
      },
      err => { }
    );
  }

  selectRelation(did) {
    for (const relation of this.relationships) {
      if (relation.metadata.theirEndpointDid === did) {
        this.selected = relation;
      }
    }
    this.isSelected = true;
    this.changeDetect.detectChanges();
  }
  openProofDetails(proof): void {
    console.log(proof)

    const dialogRef = this.dialog.open(ProofDetailsComponent, {
      width: '60%',
      data: {
        title: proof.request.name,
        proof: proof
      }
    });
  }

  openConnectionBox() {
    const dialogRef = this.dialog.open(SendConnectionRequestComponent, {
      width: '40%',
      data: {
        title: 'Create a New Relationship'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.changeDetect.detectChanges();
      this.relationships = result['relationships'];
    });
  }

  validate(proof) {
    this.loading = true;
    this.changeDetect.detectChanges();
    this.indyAPI.validate(proof).subscribe(
      res => {
        if (res['sucess']) {
          this.openSnackBar('Valid Proof');
        }
      },
      err => { console.log(err) }
    );
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
