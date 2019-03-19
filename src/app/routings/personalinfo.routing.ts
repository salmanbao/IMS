import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { PersonalinfoComponent } from 'app/lazyloading/certificates/personalinfo/personalinfo.component';
import { CertificatehomeComponent } from 'app/lazyloading/certificates/certificatehome/certificatehome.component';


const routes: Routes = [
    {
        path: '', component: CertificatehomeComponent
    },
    //{  path: '', CertificatesHomeComponent }
    //{  path: '', CertificatesHomeComponent }
    //{  path: '', CertificatesHomeComponent }
    //{  path: '', CertificatesHomeComponent }
    //{  path: '', CertificatesHomeComponent }
    //{  path: '', CertificatesHomeComponent }
];

@NgModule({

  imports: [
      RouterModule.forChild(routes),
      CommonModule
    ],
  exports: [RouterModule]
  
})
export class CertificatesRoutingModule { }
