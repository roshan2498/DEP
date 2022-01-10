import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeletedRoutingModule } from './deleted-routing.module';
import { DeletedUsersComponent } from './deleted-users/deleted-users.component';


@NgModule({
  declarations: [
    DeletedUsersComponent
  ],
  imports: [
    CommonModule,
    DeletedRoutingModule
  ]
})
export class DeletedModule { }
