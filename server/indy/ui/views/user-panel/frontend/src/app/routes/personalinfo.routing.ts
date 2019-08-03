import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddBirthComponent } from 'app/lazyloading/certificates/Birth/add-birth/add-birth.component';
import { AddMarriageComponent } from 'app/lazyloading/certificates/Marriage/add-marriage/add-marriage.component';
import { NationalidComponent } from 'app/lazyloading/certificates/National/nationalid/nationalid.component';
import { CertificatehomeComponent } from 'app/lazyloading/certificates/certificatehome/certificatehome.component';


const routes: Routes = [
  { path: '', component: CertificatehomeComponent, pathMatch: 'full' },
  { path: 'birth', component: AddBirthComponent, pathMatch: 'full' },
  { path: 'nationalid', component: NationalidComponent, pathMatch: 'full' },
  { path: 'marriage', component: AddMarriageComponent, pathMatch: 'full' }
];

@NgModule({

  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]

})
export class CertificatesRoutingModule { }
