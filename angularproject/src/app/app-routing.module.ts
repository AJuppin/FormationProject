import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserTypeFormComponent } from './user-type-form/user-type-form.component';
import { UserTypeListComponent } from './user-type-list/user-type-list.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'adduser', component: UserFormComponent },
  { path: 'adduser/:id', component: UserFormComponent },
  { path: 'usertypes', component: UserTypeListComponent },
  { path: 'addusertype', component: UserTypeFormComponent },
  { path: 'addusertype/:id', component: UserTypeFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
