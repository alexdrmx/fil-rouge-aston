import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListProductsComponent} from './list-products.component';

const routes: Routes = [
  {path: 'products', component: ListProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListProductsRoutingModule { }
