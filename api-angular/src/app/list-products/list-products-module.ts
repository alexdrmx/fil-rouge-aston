import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListProductsComponent} from './list-products.component';
import {ListProductsRoutingModule} from './list-product-routing.module';

@NgModule({
  declarations: [ListProductsComponent],
  imports: [
    CommonModule,
    ListProductsRoutingModule,
  ]
})
export class ListProductsModule { }
