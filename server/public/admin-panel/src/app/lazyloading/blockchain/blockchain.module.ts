import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BlockchainhomeComponent } from './blockchainhome/blockchainhome.component';
import { AddccComponent } from './chaincode/addcc/addcc.component';
import { BlockchainRoutingModule } from 'app/routes/blockchain.routing';
import { MaterialModule } from 'app/modules/material.module';
import { AddMemberComponent } from './ca/add-member/add-member.component';
import { InitiateCCComponent } from './chaincode/initiate-cc/initiate-cc.component';
import { AddPeerComponent } from './peers/add-peer/add-peer.component';
import { ManagechannelsComponent } from './channel/managechannels/managechannels.component';
import { AddMembersCertificatesComponent } from './organization/add-members-certificates/add-members-certificates.component';
import { AddChannelComponent } from './channel/add-channel/add-channel.component';
// tslint:disable-next-line: max-line-length
import { AddMemberCertificatesDialogComponent } from './organization/add-members-certificates/add-member-certificates-dialog/add-member-certificates-dialog.component';
import { ListPeersComponent } from './peers/list-peers/list-peers.component';
import { RequestChannelComponent } from './channel/request-channel/request-channel.component';
import { InstallChaincodeComponent } from './chaincode/install-chaincode/install-chaincode.component';
import { ListChaincodeComponent } from './chaincode/list-chaincode/list-chaincode.component';
import { SharedModule } from 'app/shared/shared.module';
import { ListMembersComponent } from './ca/list-members/list-members.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BlockchainRoutingModule,
    SharedModule
  ],
  declarations: [
    BlockchainhomeComponent,
    ManagechannelsComponent,
    AddccComponent,
    AddMemberComponent,
    AddMembersCertificatesComponent,
    AddChannelComponent,
    InitiateCCComponent,
    AddPeerComponent,
    AddMemberCertificatesDialogComponent,
    ListPeersComponent,
    RequestChannelComponent,
    InstallChaincodeComponent,
    ListChaincodeComponent,
    ListMembersComponent,
  ],
  entryComponents: [
    AddMemberCertificatesDialogComponent,
    AddChannelComponent,
    RequestChannelComponent,
    AddPeerComponent,
    InstallChaincodeComponent,
    AddMemberComponent,
    InitiateCCComponent
  ]
})
export class BlockchainModule { }
