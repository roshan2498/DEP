import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ActiveModule } from './modules/active/active.module';
import { DeletedModule } from './modules/deleted/deleted.module';
import { ManageModule } from './modules/manage/manage.module';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    ActiveModule,
    DeletedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
