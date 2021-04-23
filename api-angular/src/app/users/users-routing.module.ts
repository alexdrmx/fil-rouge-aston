import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersDetailsComponent} from './users-details/users-details.component';
import {AuthGuardService} from "../shared/auth-guard.service";
import {AuteurGuardService} from "../shared/auteur-guard.service";
import {FormUsersComponent} from "./form-users/form-users.component";
import {EditUsersComponent} from "./edit-users/edit-users.component";

const usersRoutes: Routes = [
  {
    path: 'user',
    canActivate: [AuthGuardService],
    children: [
      {path: ':id', component: UsersDetailsComponent, canActivateChild: [AuteurGuardService]},
      {path: 'edit/:id', component: EditUsersComponent, canActivateChild: [AuthGuardService]},
    ]
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
