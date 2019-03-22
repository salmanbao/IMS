import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificatesRoutingModule } from 'app/routings/personalinfo.routing';
import { ComponentsModule } from 'app/components/components.module';
import { MaterialModule } from 'app/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CertificatehomeComponent } from './certificatehome/certificatehome.component';
import { BirthComponent } from './birth/birth.component';
import { DeathComponent } from './death/death.component';
import { MarriageComponent } from './marriage/marriage.component';
import { NationalidService } from 'app/services/nationalid.service';
import { NationalidComponent } from './National/nationalid/nationalid.component';
import { ListnationalidComponent } from './National/listnationalid/listnationalid.component';
import { UpdateNationalIdComponent } from './National/update-national-id/update-national-id.component';
import { NationalIdHomeComponent } from './National/national-id-home/national-id-home.component';

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
    CertificatehomeComponent,
    BirthComponent,
    DeathComponent,
    NationalidComponent,
    MarriageComponent,
    ListnationalidComponent,
    UpdateNationalIdComponent,
    NationalIdHomeComponent
  ],
  exports: [
    
  ],
  providers : [
    NationalidService
  ]
})
export class CertificatesModule { }
 