import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CertificateService } from 'app/services/certificate.service';

@Component({
  selector: 'app-list-certificates',
  templateUrl: './list-certificates.component.html',
  styleUrls: ['./list-certificates.component.scss']
})
export class ListCertificatesComponent implements OnInit {
  @Input() certificate: any;
  certificates = []
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private certificateAPI: CertificateService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
        this.certificateAPI.getAll(id).subscribe(
          res => {
            this.certificates = res['docs'];
           },
          err => { }
        );
    }

}