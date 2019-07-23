import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from 'app/components/messages/messages.component';
import { CredentialsComponent } from 'app/components/credentials/credentials.component';
import { ProofRequestComponent } from 'app/components/proof-request/proof-request.component';
import { IssuingComponent } from 'app/components/issuing/issuing.component';
import { RelationshipsComponent } from 'app/components/relationships/relationships.component';


const routes: Routes = [
  { path: 'relations', component: RelationshipsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'credentials', component: CredentialsComponent },
  { path: 'proofs', component: ProofRequestComponent },
  { path: 'issuing', component: IssuingComponent }
];

@NgModule({

  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]

})
export class ComponentsRoutingModule { }
