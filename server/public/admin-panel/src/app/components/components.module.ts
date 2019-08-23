import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MessagesComponent } from './messages/messages.component';
import { IssuingComponent } from './issuing/issuing.component';
import { CreateSchemaComponent } from './issuing/create-schema/create-schema.component';
import { CreateCredentialDefinitionComponent } from './issuing/create-credential-definition/create-credential-definition.component';
import { SendCredentialOfferComponent } from './issuing/send-credential-offer/send-credential-offer.component';
import { AttributesFormComponent } from './issuing/send-credential-offer/attributes-form/attributes-form.component';
import { ProofRequestComponent } from './proof-request/proof-request.component';
import { ComponentsRoutingModule } from 'app/routes/components.routing';
import { RelationshipsComponent } from './relationships/relationships.component';
import { ProofDetailsComponent } from './relationships/proof-details/proof-details.component';
import { SendConnectionRequestComponent } from './relationships/send-connection-request/send-connection-request.component';
import { AttributesMetaDataComponent } from './issuing/create-schema/attributes-meta-data/attributes-meta-data.component';
import { CredentialsComponent } from './issuing/create-credential-definition/credentials/credentials.component';

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
    ProofRequestComponent,
    RelationshipsComponent,
    ProofDetailsComponent,
    SendConnectionRequestComponent,
    AttributesMetaDataComponent
  ],
  exports: [

  ],
  entryComponents: [
    ProofDetailsComponent,
    SendConnectionRequestComponent,
    AttributesMetaDataComponent
  ]
})
export class ComponentsModule { }
