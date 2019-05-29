import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'view-dashboard', class: '' },
  { path: '/certificates', title: 'Certificates', icon: 'certificate', class: '' },
  { path: '/blockchain', title: 'Blockchain', icon: 'view-comfy', class: '' },
  { path: '/reports', title: 'Reports', icon: 'chart-arc', class: '' },
  { path: '/explorer' , title: 'Explorer', icon: 'buddhism', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
