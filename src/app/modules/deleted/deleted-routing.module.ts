import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletedUsersComponent } from './deleted-users/deleted-users.component';

const routes: Routes = [
  {
    path: "deleted",
    component: DeletedUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeletedRoutingModule { }
