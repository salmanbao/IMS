import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BlockchainhomeComponent } from './blockchainhome/blockchainhome.component';
import { AddccComponent } from './chaincode/addcc/addcc.component';
import { BlockchainRoutingModule } from 'app/routings/blockchain.routing';
import { MaterialModule } from 'app/modules/material.module';
import { AddMemberComponent } from './ca/add-member/add-member.component';
import { InitiateCCComponent } from './chaincode/initiate-cc/initiate-cc.component';
import { AddPeerComponent } from './peers/add-peer/add-peer.component';
import { ManagechannelsComponent } from './channel/managechannels/managechannels.component';
import { ManageMembersComponent } from './organization/manage-members/manage-members.component';
import { AddMembersCertificatesComponent } from './organization/add-members-certificates/add-members-certificates.component';
import { AddChannelComponent } from './channel/add-channel/add-channel.component';
import { ManageCertificatesAuthorityComponent } from './ca/manage-certificates-authority/manage-certificates-authority.component';
import { ListOrgMembersComponent } from './organization/list-org-members/list-org-members.component';
import { ManageNotificationsComponent } from './notification/manage-notifications/manage-notifications.component';
import { AllNotificationsComponent } from './notification/all-notifications/all-notifications.component';
import { PendingNotificationsComponent } from './notification/pending-notifications/pending-notifications.component';
import { CompletedNotificationsComponent } from './notification/completed-notifications/completed-notifications.component';
import { AddMemberDialogComponent } from './organization/list-org-members/add-member-dialog/add-member-dialog.component';
import { AddMemberCertificatesDialogComponent } from './organization/add-members-certificates/add-member-certificates-dialog/add-member-certificates-dialog.component';
import { ListPeersComponent } from './peers/list-peers/list-peers.component';
import { RequestChannelComponent } from './channel/request-channel/request-channel.component';
import { InstallChaincodeComponent } from './chaincode/install-chaincode/install-chaincode.component';
import { ListChaincodeComponent } from './chaincode/list-chaincode/list-chaincode.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BlockchainRoutingModule
  ],
  declarations: [
    BlockchainhomeComponent,
    ManagechannelsComponent,
    AddccComponent,
    AddMemberComponent,
    ManageMembersComponent,
    AddMembersCertificatesComponent,
    AddChannelComponent,
    InitiateCCComponent,
    AddPeerComponent,
    ManageCertificatesAuthorityComponent,
    ListOrgMembersComponent,
    ManageNotificationsComponent,
    AllNotificationsComponent,
    PendingNotificationsComponent,
    CompletedNotificationsComponent,
    AddMemberDialogComponent,
    AddMemberCertificatesDialogComponent,
    ListPeersComponent,
    RequestChannelComponent,
    InstallChaincodeComponent,
    ListChaincodeComponent
  ],
  entryComponents: [
    AddMemberDialogComponent,
    AddMemberCertificatesDialogComponent,
    AddChannelComponent,
    RequestChannelComponent,
    AddPeerComponent,
    InstallChaincodeComponent
  ]
})
export class BlockchainModule { }
