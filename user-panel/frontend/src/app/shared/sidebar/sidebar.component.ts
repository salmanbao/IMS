import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/services/authentication.service';
import { Router } from '@angular/router';
declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'fingerprint', class: '' },
  { path: '/certificates', title: 'Certificates', icon: 'fingerprint', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  name: string;
  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { 
    this.getProfile();
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  getProfile() {
    let profile = JSON.parse(localStorage.getItem('user'));
    this.name = profile['username'];
  }

}
