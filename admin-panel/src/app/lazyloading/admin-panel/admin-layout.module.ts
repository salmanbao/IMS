import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from '../../routes/admin-layout.routing';
import { DashboardComponent } from 'app/lazyloading/admin-panel/dashboard/dashboard.component';
import { UserProfileComponent } from 'app/components/user-profile/user-profile.component';
import { TableListComponent } from 'app/components/table-list/table-list.component';
import { MapsComponent } from 'app/components/maps/maps.component';
import { NotificationsComponent } from 'app/components/notifications/notifications.component';
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
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    MapsComponent,
    NotificationsComponent,
  ]
})

export class AdminLayoutModule { }
