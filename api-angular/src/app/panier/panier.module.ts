import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PanierComponent} from './panier.component';
import {PanierRoutingModule} from './panier-routing.module';

@NgModule({
  declarations: [PanierComponent],
  imports: [
    CommonModule,
    PanierRoutingModule,
  ]
})
export class PanierModule { }
