import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockchainhomeComponent } from './blockchainhome/blockchainhome.component';
import { ManagechannelsComponent } from './managechannels/managechannels.component';
import { AddccComponent } from './addcc/addcc.component';
import { ManagepeersComponent } from './managepeers/managepeers.component';
import { BlockchainRoutingModule } from 'app/routings/blockchain.routing';
import { MaterialModule } from 'app/modules/material.module';
import { AddMemberComponent } from './add-member/add-member.component';
import { ManageMembersComponent } from './manage-members/manage-members.component';
import { ManageMembersCertificatesComponent } from './manage-members-certificates/manage-members-certificates.component';
import { AddMembersCertificatesComponent  } from './add-members-certificates/add-members-certificates.component';
import { AddChannelComponent } from './add-channel/add-channel.component';
import { InitiateCCComponent } from './initiate-cc/initiate-cc.component';
import { AddPeerComponent } from './add-peer/add-peer.component';
import { ManageCertificatesAuthorityComponent } from './manage-certificates-authority/manage-certificates-authority.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListOrgMembersComponent } from './list-org-members/list-org-members.component';
import { ManageNotificationsComponent } from './manage-notifications/manage-notifications.component';
import { AllNotificationsComponent } from './all-notifications/all-notifications.component';
import { PendingNotificationsComponent } from './pending-notifications/pending-notifications.component';
import { CompletedNotificationsComponent } from './completed-notifications/completed-notifications.component';
import { AddMemberDialogComponent } from './add-member-dialog/add-member-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BlockchainRoutingModule
  ],
  declarations: [
    BlockchainhomeComponent,
    ManagechannelsComponent,
    AddccComponent,
    ManagepeersComponent,
    AddMemberComponent,
    ManageMembersComponent,
    ManageMembersCertificatesComponent,
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
    AddMemberDialogComponent
  ]
})
export class BlockchainModule { }
