import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from '../../routes/admin-layout.routing';
import { DashboardComponent } from 'app/lazyloading/admin-panel/dashboard/dashboard.component';
import { MaterialModule } from 'app/modules/material.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { ProofDetailsComponent } from './dashboard/proof-details/proof-details.component';
import { SendConnectionRequestComponent } from './dashboard/send-connection-request/send-connection-request.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    ProofDetailsComponent,
    SendConnectionRequestComponent,
  ],
  entryComponents: [
    ProofDetailsComponent,
    SendConnectionRequestComponent
  ]
})

export class AdminLayoutModule { }
