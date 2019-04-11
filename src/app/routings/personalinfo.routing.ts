import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CertificatehomeComponent } from 'app/lazyloading/certificates/certificatehome/certificatehome.component';
import { NationalIdHomeComponent } from 'app/lazyloading/certificates/National/national-id-home/national-id-home.component';
import { BirthHomeComponent } from 'app/lazyloading/certificates/Birth/birth-home/birth-home.component';
import { ListMarriageComponent } from 'app/lazyloading/certificates/Marriage/list-marriage/list-marriage.component';
import { FamilyHomeComponent } from 'app/lazyloading/certificates/Family/family-home/family-home.component';


const routes: Routes = [
  { path: '', component: CertificatehomeComponent },
  { path: 'birth', component: BirthHomeComponent },
  { path: 'nationalidlist', component: NationalIdHomeComponent },
  { path: 'marriage', component: ListMarriageComponent },
  { path: 'family', component: FamilyHomeComponent }
];

@NgModule({

  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]

})
export class CertificatesRoutingModule { }
