import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  did;
  constructor(
    private apiService:ApiService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.apiService.loadGeneralInfo().subscribe(
      res => {
        this.did = res['endpointDid'];
        this.ref.detectChanges();
      },
      err => {}
    );
  }

}
