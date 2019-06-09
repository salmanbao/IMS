import { Component, OnInit } from '@angular/core';
import { CertificateService } from 'app/services/certificate.service';

@Component({
  selector: 'app-birth-home',
  templateUrl: './birth-home.component.html',
  styleUrls: ['./birth-home.component.scss']
})
export class BirthHomeComponent implements OnInit {

  constructor(private certificateService: CertificateService) { }

  ngOnInit() {
  }

}
