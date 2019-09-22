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
  credential_keys = [];
  credential_parsed;

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
    this.credential_keys = [];
    this.credential_parsed = [];
    this.isSelected = !this.isSelected;
    for (const credentials of this.credentials) {
      if (credentials.referent === referent) {
        this.selected = credentials;
        const credential_stringify_keys = Object.keys(this.selected['attrs']);
        if (!this.selected['attrs'].name) {
          credential_stringify_keys.forEach(element => {
            const name = JSON.parse(element).name;
            this.credential_keys.push(name);
            this.credential_parsed[name] = this.selected['attrs'][element]
          });
        } else {
          this.credential_parsed = this.selected['attrs'];
          this.credential_keys = Object.keys(this.credential_parsed);
        }
        console.log(this.credential_parsed);
        console.log(this.credential_keys);
      }
    }
    this.changeDetect.detectChanges();
  }



}
