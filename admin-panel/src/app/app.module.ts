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
import { MaterialModule } from './modules/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { AuthenticationService } from './services/authentication.service';
import { CertificateService } from './services/certificate.service';
import { ChaincodeService } from './services/chaincode.service';
import { ChannelService } from './services/channel.service';
import { OrganizationService } from './services/organization.service';
import { PeerService } from './services/peer.service';
import { UserService } from './services/user.service';
import { RedirectGuard } from './guards/redirect.guard';
import { SharedModule } from './shared/shared.module';

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
    SharedModule
  ],
  exports: [
    FormsModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthenticationService,
    CertificateService,
    ChaincodeService,
    ChannelService,
    OrganizationService,
    PeerService,
    UserService,
    RedirectGuard,
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
