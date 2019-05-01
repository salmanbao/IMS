import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportshomeComponent } from './reportshome/reportshome.component';
import { GeneratereportComponent } from './generatereport/generatereport.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReportshomeComponent, GeneratereportComponent]
})
export class ReportsModule { }
