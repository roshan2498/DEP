import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveRoutingModule } from './active-routing.module';
import { ActiveUsersComponent } from './active-users/active-users.component';


@NgModule({
  declarations: [
    ActiveUsersComponent
  ],
  imports: [
    CommonModule,
    ActiveRoutingModule
  ]
})
export class ActiveModule { }
