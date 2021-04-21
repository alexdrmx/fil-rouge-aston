import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {UsersDetailsComponent} from "./users-details/users-details.component";
import { UsersRoutingModule} from "./users-routing.module";
import {AuteurGuardService} from "../shared/auteur-guard.service";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ToastrModule} from "ngx-toastr";
import { FormUsersComponent } from './form-users/form-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';

@NgModule({
  declarations: [UsersDetailsComponent, FormUsersComponent, EditUsersComponent],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    UsersRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [AuteurGuardService]
})
export class UsersModule { }
