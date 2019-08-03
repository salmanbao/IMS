import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  channels: Number = 0;
  chaincodes: Number = 0;
  peers: Number = 0;
  orderers: Number = 0;

  certificates = [{
    title: 'cert-1',
  },
  {
    title: 'cert-2',
  },
  {
    title: 'cert-3',
  },
  {
    title: 'cert-4',
  },
  {
    title: 'cert-5',
  },
  {
    title: 'cert-6',
  } ];

  constructor(
  ) { }

  ngOnInit() {  }

}
