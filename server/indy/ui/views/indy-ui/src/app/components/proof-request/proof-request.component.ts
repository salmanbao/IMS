import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar, MatChipInputEvent } from '@angular/material';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-proof-request',
  templateUrl: './proof-request.component.html',
  styleUrls: ['./proof-request.component.scss']
})
export class ProofRequestComponent implements OnInit {
  relationships;
  proofRequests;
  proofs;
  selectedProof;
  isOtherProof: Boolean = false;
  attributes = [];
  proofRequest: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private snackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private ref: ChangeDetectorRef,
    private indyAPI: ApiService
  ) { }

  ngOnInit() {
    this.proofRequest = this._formBuilder.group({
      relation: ['', Validators.required],
      proof_request_id: ['', Validators.required],
      requestedProof: ['', null]
    });
    this.indyAPI.loadGeneralInfo().subscribe(
      res => {
        console.log(res);
        this.proofRequests = res['proofRequests'];
        this.relationships = res['relationships'];
        this.proofs = Object.keys(this.proofRequests);
      },
      err => { }
    );
    this.ref.detectChanges();
  }

  selectProof(proof) {
    if (proof === 'proofRequestOther') {
      this.isOtherProof = true;
    } else {
      this.isOtherProof = false;
      const proof_string = this.proofRequests[proof]['string'];
      const attributes_ref = Object.keys(JSON.parse(proof_string)['requested_attributes']);
      attributes_ref.forEach((ref) => {
        this.attributes.push(
          JSON.parse(JSON.parse(proof_string)['requested_attributes'][ref]['name']).name
        );
      });
    }
    this.ref.detectChanges();
  }

  sendProofRequest() {
    let manual_entry;
    const relation = this.proofRequest.get('relation').value;
    const proof_request_id = this.proofRequest.get('proof_request_id').value;
    manual_entry = this.proofRequest.get('requestedProof').value;
    if (!manual_entry) {
      manual_entry = this.buildAttributes(proof_request_id);
    }
    if (this.attributes.length > 0 || this.proofRequest.get('requestedProof').value) {

      this.indyAPI.sendProofRequest(relation, proof_request_id, manual_entry).subscribe(
        res => {
          if (res['success']) {
            this.openSnackBar('Proof Request successfully send')
          }
        },
        err => { console.log(err) }
      );
    } else {
      this.openSnackBar('Select at least one attribute');
    }
  }

  buildAttributes(proof_id) {
    const proof_obj = JSON.parse(this.proofRequests[proof_id]['string']);
    const credDefId = proof_obj.requested_attributes.attr1_referent.restrictions[0].cred_def_id;
    proof_obj.requested_attributes = {};
    let attr_referent = {};
    let i = 0;
    this.attributes.forEach((attr) => {
      attr_referent = {
        name: attr,
        restrictions: [{ cred_def_id: credDefId }]
      };
      proof_obj.requested_attributes['attr' + (i + 1) + '_referent'] = attr_referent;
      i++;
    });
    return proof_obj;
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our person
    if ((value || '').trim()) {
      const name = value.trim();
      this.attributes.push(name);
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }

  }

  remove(attr): void {
    const index = this.attributes.indexOf(attr);

    if (index >= 0) {
      this.attributes.splice(index, 1);
    }
  }


}
