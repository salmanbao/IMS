import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './lazyloading/admin-panel/admin-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full', 
    canActivate: [AuthGuard]
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './lazyloading/admin-panel/admin-layout.module#AdminLayoutModule'
      }
    ],
    canActivate: [AuthGuard]
  },
  { path: 'certificates', loadChildren: './lazyloading/certificates/certificates.module#CertificatesModule' ,canActivate: [AuthGuard]},
  { path: 'blockchain', loadChildren: './lazyloading/blockchain/blockchain.module#BlockchainModule',canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  //{ path: 'input',      component: InputcomponentComponent }
  // { path: 'user-profile',   component: UserProfileComponent },
  // { path: 'table-list',     component: TableListComponent },
  // { path: 'typography',     component: TypographyComponent },
  // { path: 'icons',          component: IconsComponent },
  // { path: 'maps',           component: MapsComponent },
  // { path: 'notifications',  component: NotificationsComponent },
  // { path: 'upgrade',        component: UpgradeComponent },
  // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
