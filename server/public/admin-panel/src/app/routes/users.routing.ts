import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [

];

@NgModule({

  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]

})
export class UsersRoutingModule { }
