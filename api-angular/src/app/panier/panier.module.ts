import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PanierComponent} from './panier.component';
import {PanierRoutingModule} from './panier-routing.module';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [PanierComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    PanierRoutingModule,
  ]
})
export class PanierModule { }
