import { NgModule } from '@angular/core';
import { ActivationEnd, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  { path: 'manage', loadChildren: () => import('./modules/manage/manage.module').then(m => m.ManageModule) },
  {
    path: "**",
    component: NotfoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
