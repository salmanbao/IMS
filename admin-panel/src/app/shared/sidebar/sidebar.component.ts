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
  { path: '/certificates', title: 'Certificates', icon: 'fingerprint', class: '' },
  { path: '/blockchain', title: 'Blockchain', icon: 'fingerprint', class: '' },
 // { path: '/reports', title: 'Reports', icon: 'fingerprint', class: '' },
  { path: '/explorer', title: 'Explorer', icon: 'fingerprint', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

}
