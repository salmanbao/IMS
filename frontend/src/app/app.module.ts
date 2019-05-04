import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import {
  AgmCoreModule
} from '@agm/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { AdminLayoutComponent } from './lazyloading/admin-panel/admin-layout.component';
import { MaterialModule } from './modules/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { fakeBackendProvider } from './helpers/fake.backend';



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
  exports: [
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    //fakeBackendProvider,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('/assets/mdi.svg')); // Or whatever path you placed mdi.svg at
  }
}
