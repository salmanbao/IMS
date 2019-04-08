import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxMaskModule} from 'ngx-mask';
import { CertificatesRoutingModule } from 'app/routings/personalinfo.routing';
import { ComponentsModule } from 'app/components/components.module';
import { MaterialModule } from 'app/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CertificatehomeComponent } from './certificatehome/certificatehome.component';
import { DeathComponent } from './death/death.component';
import { NationalidService } from 'app/services/nationalid.service';
import { NationalidComponent } from './National/nationalid/nationalid.component';
import { ListnationalidComponent } from './National/listnationalid/listnationalid.component';
import { UpdateNationalIdComponent } from './National/update-national-id/update-national-id.component';
import { NationalIdHomeComponent } from './National/national-id-home/national-id-home.component';
import { ListBirthComponent } from './Birth/list-birth/list-birth.component';
import { BirthHomeComponent } from './Birth/birth-home/birth-home.component';
import { UpdateBirthComponent } from './Birth/update-birth/update-birth.component';
import { AddBirthComponent } from './Birth/add-birth/add-birth.component';
import { ListMarriageComponent } from './Marriage/list-marriage/list-marriage.component';
import { AddMarriageComponent } from './Marriage/add-marriage/add-marriage.component';
import { UpdateMarriageComponent } from './Marriage/update-marriage/update-marriage.component';
import { HomeMarriageComponent } from './Marriage/home-marriage/home-marriage.component';
 
@NgModule({
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    ComponentsModule,
    CertificatesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CertificatehomeComponent,
    DeathComponent,
    NationalidComponent,
    ListnationalidComponent,
    UpdateNationalIdComponent,
    NationalIdHomeComponent,
    ListBirthComponent,
    BirthHomeComponent,
    UpdateBirthComponent,
    AddBirthComponent,
    ListMarriageComponent,
    AddMarriageComponent,
    UpdateMarriageComponent,
    HomeMarriageComponent
  ],
  exports: [
    
  ],
  providers : [
    NationalidService
  ]
})
export class CertificatesModule { }
 