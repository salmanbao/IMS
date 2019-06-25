import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { CertificatesRoutingModule } from 'app/routes/personalinfo.routing';
import { ComponentsModule } from 'app/components/components.module';
import { MaterialModule } from 'app/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CertificatehomeComponent } from './certificatehome/certificatehome.component';
import { UpdateBirthComponent } from './Birth/update-birth/update-birth.component';
import { AddBirthComponent } from './Birth/add-birth/add-birth.component';
import { AddMarriageComponent } from './Marriage/add-marriage/add-marriage.component';
import { CertificateService } from 'app/services/certificate.service';
import { NationalidComponent } from './National/nationalid/nationalid.component';
import { UpdateNationalIdComponent } from './National/update-national-id/update-national-id.component';

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
    UpdateBirthComponent,
    AddBirthComponent,
    AddMarriageComponent,
    NationalidComponent,
    UpdateNationalIdComponent
  ],
  exports: [
  ],
  entryComponents: [
  ],
  providers: [
    CertificateService
  ]
})
export class CertificatesModule { }
