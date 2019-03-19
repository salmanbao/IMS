import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from 'app/routings/users.routing';
import { UsershomeComponent } from './usershome/usershome.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ListusersComponent } from './listusers/listusers.component';
import { AddrolesComponent } from './addroles/addroles.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [
    UsershomeComponent, 
    AdduserComponent, 
    UpdateuserComponent, 
    ListusersComponent, 
    AddrolesComponent
  ]
})
export class UsersModule { }
