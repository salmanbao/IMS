import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Certificates {
  title: string;
  route: string;
}

@Component({
  selector: 'app-certificatehome',
  templateUrl: './certificatehome.component.html',
  styleUrls: ['./certificatehome.component.scss']
})
export class CertificatehomeComponent implements OnInit {

  certificates: Certificates[] = [
    { title: 'Birth Certificate', route: '/certificates/birth' },
    { title: 'Marriage Certificate', route: '/certificates/marraige' },
    { title: 'National ID', route: '/certificates/nationalid' }
  ];
  selectedValue: string;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
}
