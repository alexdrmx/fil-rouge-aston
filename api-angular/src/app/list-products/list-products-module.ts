import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListProductsComponent} from './list-products.component';
import {ListProductsRoutingModule} from './list-product-routing.module';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [ListProductsComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    ListProductsRoutingModule,
  ]
})
export class ListProductsModule { }
