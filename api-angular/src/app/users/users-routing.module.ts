import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersDetailsComponent} from './users-details/users-details.component';
import {AuthGuardService} from "../shared/auth-guard.service";
import {AuteurGuardService} from "../shared/auteur-guard.service";

const usersRoutes: Routes = [
  {
    path: 'user',
    canActivate: [AuthGuardService],
    children: [
      {path: ':id', component: UsersDetailsComponent/*, canActivateChild: [AuteurGuardService]*/},
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
