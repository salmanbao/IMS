import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BlockchainhomeComponent } from 'app/lazyloading/blockchain/blockchainhome/blockchainhome.component';



const routes: Routes = [
  {  path: '', component: BlockchainhomeComponent }
];

@NgModule({

  imports: [
      RouterModule.forChild(routes),
      CommonModule
    ],
  exports: [RouterModule]
  
})
export class BlockchainRoutingModule { }
