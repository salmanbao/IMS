import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/modules/material.module';
import { MessagesComponent } from './messages/messages.component';
import { ComponentsRoutingModule } from 'app/routes/components.routing';
import { CredentialsComponent } from './credentials/credentials.component';
import { IssuingComponent } from './issuing/issuing.component';
import { CreateSchemaComponent } from './issuing/create-schema/create-schema.component';
import { CreateCredentialDefinitionComponent } from './issuing/create-credential-definition/create-credential-definition.component';
import { SendCredentialOfferComponent } from './issuing/send-credential-offer/send-credential-offer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttributesFormComponent } from './issuing/send-credential-offer/attributes-form/attributes-form.component';
import { ProofRequestComponent } from './proof-request/proof-request.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsRoutingModule
  ],
  declarations: [
  MessagesComponent,
  CredentialsComponent,
  IssuingComponent,
  CreateSchemaComponent,
  CreateCredentialDefinitionComponent,
  SendCredentialOfferComponent,
  AttributesFormComponent,
  ProofRequestComponent
],
  exports: [

  ]
})
export class ComponentsModule { }
