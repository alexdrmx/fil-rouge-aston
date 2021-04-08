import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PanierComponent} from './panier.component';

const routes: Routes = [
  {path: 'panier', component: PanierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanierRoutingModule { }
