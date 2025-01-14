import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/modules/material.module';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    FooterComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
