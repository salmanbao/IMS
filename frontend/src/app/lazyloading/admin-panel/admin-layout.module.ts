import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from '../../routings/admin-layout.routing';
import { DashboardComponent } from 'app/components/dashboard/dashboard.component';
import { IconsComponent } from 'app/components/icons/icons.component';
import { UserProfileComponent } from 'app/components/user-profile/user-profile.component';
import { TableListComponent } from 'app/components/table-list/table-list.component';
import { TypographyComponent } from 'app/components/typography/typography.component';
import { MapsComponent } from 'app/components/maps/maps.component';
import { NotificationsComponent } from 'app/components/notifications/notifications.component';
import { UpgradeComponent } from 'app/components/upgrade/upgrade.component';
import { MaterialModule } from 'app/modules/material.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MaterialModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ]
})

export class AdminLayoutModule { }
