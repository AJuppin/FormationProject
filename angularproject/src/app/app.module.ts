import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserTypeFormComponent } from './user-type-form/user-type-form.component';
import { UserTypeListComponent } from './user-type-list/user-type-list.component';

@NgModule({
  declarations: [AppComponent, UserFormComponent, UserListComponent, UserTypeFormComponent, UserTypeListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
