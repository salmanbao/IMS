import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import {
  AgmCoreModule
} from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminLayoutComponent } from './lazyloading/admin-panel/admin-layout.component';
import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from '@angular/common/http';






@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  exports:[
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
   

  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
