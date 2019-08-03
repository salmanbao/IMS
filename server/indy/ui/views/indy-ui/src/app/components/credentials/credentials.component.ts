import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent implements OnInit {
  credentialDefinitions;
  credentials;
  credentialKeys;


  color = 'primary';
  mode = 'determinate';
  value = 50;
  loading = false;
  isSelected = false;
  selected = {};

  constructor(
    private changeDetect: ChangeDetectorRef,
    private indyAPI: ApiService
  ) { }
  ngOnInit() {
    this.indyAPI.loadGeneralInfo().subscribe(
      res => {
        console.log(res);
        this.credentialDefinitions = res['credentialDefinitions'];
        this.credentials = res['credentials']
        console.log(this.credentials);
      },
      err => { }
    );
  }

  selectCert(referent) {
    this.isSelected = !this.isSelected;
    for (const credentials of this.credentials) {
      if (credentials.referent === referent) {
        this.selected = credentials;
        this.credentialKeys = Object.keys(this.selected['attrs']);
      }
    }
    this.changeDetect.detectChanges();
  }



}
