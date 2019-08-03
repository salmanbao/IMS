import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CertificatehomeComponent } from 'app/lazyloading/certificates/certificatehome/certificatehome.component';
import { NationalIdHomeComponent } from 'app/lazyloading/certificates/National/national-id-home/national-id-home.component';
import { BirthHomeComponent } from 'app/lazyloading/certificates/Birth/birth-home/birth-home.component';
import { FamilyHomeComponent } from 'app/lazyloading/certificates/Family/family-home/family-home.component';
import { HomeMarriageComponent } from 'app/lazyloading/certificates/Marriage/home-marriage/home-marriage.component';
import { ListCertificatesComponent } from 'app/lazyloading/certificates/list-certificates/list-certificates.component';


const routes: Routes = [
  { path: '', component: CertificatehomeComponent },
  { path: 'list/:id', component: ListCertificatesComponent },
  { path: 'birth', component: BirthHomeComponent },
  { path: 'nationalidlist', component: NationalIdHomeComponent },
  { path: 'marriage', component: HomeMarriageComponent },
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
