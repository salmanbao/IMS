import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CertificatehomeComponent } from 'app/lazyloading/certificates/certificatehome/certificatehome.component';
import { DeathComponent } from 'app/lazyloading/certificates/death/death.component';
import { MarriageComponent } from 'app/lazyloading/certificates/marriage/marriage.component';
import { NationalidComponent } from 'app/lazyloading/certificates/National/nationalid/nationalid.component';
import { NationalIdHomeComponent } from 'app/lazyloading/certificates/National/national-id-home/national-id-home.component';
import { ListBirthComponent } from 'app/lazyloading/certificates/Birth/list-birth/list-birth.component';
import { BirthHomeComponent } from 'app/lazyloading/certificates/Birth/birth-home/birth-home.component';


const routes: Routes = [
    {  path: '', component: CertificatehomeComponent },
    {  path: 'birth', component: BirthHomeComponent },
    {  path: 'death', component: DeathComponent },
    {  path: 'nationalidlist', component:NationalIdHomeComponent  },
    {  path: 'addnationalid', component:NationalidComponent  },
    {  path: 'marriage', component: MarriageComponent}
];

@NgModule({

  imports: [
      RouterModule.forChild(routes),
      CommonModule
    ],
  exports: [RouterModule]
  
})
export class CertificatesRoutingModule { }
