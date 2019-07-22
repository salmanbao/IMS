import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RedirectGuard } from './guards/redirect.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'//,
    // canActivate: [AuthGuard]
  }, {
    path: 'dashboard',
    loadChildren: './lazyloading/admin-panel/admin-layout.module#AdminLayoutModule'
  },
  { path: 'requests', loadChildren: './components/components.module#ComponentsModule' },
  {
    path: 'explorer'
    ,
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
