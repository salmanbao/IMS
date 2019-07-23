import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from '../../routes/admin-layout.routing';
import { DashboardComponent } from 'app/lazyloading/admin-panel/dashboard/dashboard.component';
import { MaterialModule } from 'app/modules/material.module';
import { AdminLayoutComponent } from './admin-layout.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [
    AdminLayoutComponent,
    DashboardComponent
  ]
})

export class AdminLayoutModule { }
