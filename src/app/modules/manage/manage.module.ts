import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageRoutingModule } from './manage-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { PreviewComponent } from './preview/preview.component';


@NgModule({
  declarations: [
    UserListComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }
