import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RedirectGuard } from './guards/redirect.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'dashboard', loadChildren: './lazyloading/admin-panel/admin-layout.module#AdminLayoutModule', canActivate: [AuthGuard] },
  { path: 'certificates', loadChildren: './lazyloading/certificates/certificates.module#CertificatesModule', canActivate: [AuthGuard] },
  { path: 'blockchain', loadChildren: './lazyloading/blockchain/blockchain.module#BlockchainModule', canActivate: [AuthGuard] },
  { path: 'requests', loadChildren: './components/components.module#ComponentsModule' , canActivate: [AuthGuard]},
  {
    path: 'explorer', canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: 'http://localhost:8085/'
    }
  }

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
