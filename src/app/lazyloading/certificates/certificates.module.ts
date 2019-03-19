import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { CertificatesRoutingModule } from 'app/routings/personalinfo.routing';
import { ComponentsModule } from 'app/components/components.module';
import { MaterialModule } from 'app/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalInfoService } from 'app/services/personal-info.service';
import { CertificatehomeComponent } from './certificatehome/certificatehome.component';
import { BirthComponent } from './birth/birth.component';
import { DeathComponent } from './death/death.component';
import { NationalidComponent } from './nationalid/nationalid.component';
import { MarriageComponent } from './marriage/marriage.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    CertificatesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    PersonalinfoComponent,
    CertificatehomeComponent,
    BirthComponent,
    DeathComponent,
    NationalidComponent,
    MarriageComponent
  ],
  exports: [
    
  ],
  providers : [
    PersonalInfoService
  ]
})
export class CertificatesModule { }
 