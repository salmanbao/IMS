import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockchainhomeComponent } from './blockchainhome/blockchainhome.component';
import { ManagechannelsComponent } from './managechannels/managechannels.component';
import { AddccComponent } from './addcc/addcc.component';
import { ManagepeersComponent } from './managepeers/managepeers.component';
import { BlockchainRoutingModule } from 'app/routings/blockchain.routing';
import { MaterialModule } from 'app/modules/material.module';
import { AddMemberComponent } from './add-member/add-member.component';

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
    ManagepeersComponent, AddMemberComponent
  ]
})
export class BlockchainModule { }
