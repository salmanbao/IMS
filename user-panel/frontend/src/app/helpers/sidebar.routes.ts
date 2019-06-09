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
    { path: '/reports', title: 'Reports', icon: 'fingerprint', class: '' },
    { path: '/explorer' , title: 'Explorer', icon: 'fingerprint', class: '' },
  ];