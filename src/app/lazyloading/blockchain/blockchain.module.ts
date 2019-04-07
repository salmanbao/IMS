import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BlockchainhomeComponent } from './blockchainhome/blockchainhome.component';
import { AddccComponent } from './addcc/addcc.component';
import { ManagepeersComponent } from './managepeers/managepeers.component';
import { BlockchainRoutingModule } from 'app/routings/blockchain.routing';
import { MaterialModule } from 'app/modules/material.module';
import { AddMemberComponent } from './add-member/add-member.component';
import { InitiateCCComponent } from './initiate-cc/initiate-cc.component';
import { AddPeerComponent } from './add-peer/add-peer.component';
import { AddUserComponent } from './add-user/add-user.component';
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



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    BlockchainRoutingModule
  ],
  declarations: [
    BlockchainhomeComponent,
    ManagechannelsComponent,
    AddccComponent,
    ManagepeersComponent,
    AddMemberComponent,
    ManageMembersComponent,
   
    AddMembersCertificatesComponent,
    AddChannelComponent,
    InitiateCCComponent,
    AddPeerComponent,
    ManageCertificatesAuthorityComponent,
    AddUserComponent,
    ListOrgMembersComponent,
    ManageNotificationsComponent,
    AllNotificationsComponent,
    PendingNotificationsComponent,
    CompletedNotificationsComponent,
    AddMemberDialogComponent,
    AddMemberCertificatesDialogComponent
  ],
  entryComponents: [
    AddMemberDialogComponent,
    AddMemberCertificatesDialogComponent
  ]
})
export class BlockchainModule { }
