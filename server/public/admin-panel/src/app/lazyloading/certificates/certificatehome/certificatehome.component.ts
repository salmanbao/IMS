import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-certificatehome',
  templateUrl: './certificatehome.component.html',
  styleUrls: ['./certificatehome.component.scss']
})
export class CertificatehomeComponent implements OnInit {
  credentialDefinitions = [];

  constructor(
    private changeDetect: ChangeDetectorRef,
    private indyAPI: ApiService
  ) { }

  ngOnInit() {
    this.indyAPI.loadGeneralInfo().subscribe(
      res => {
        res['credentialDefinitions'].forEach(def => {
          this.credentialDefinitions.push(def.id);
        });
        this.changeDetect.detectChanges();
      },
      err => { }
    );
  }
}
