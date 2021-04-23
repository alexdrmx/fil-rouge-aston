import { Component, OnInit } from '@angular/core';
import {Products} from "../models/products.model";
import {ProductsService} from "../products/products.service";
import {CartService} from "../products/cart.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  products: Products[];
  panier: Products[];
  loading = false;
  constructor(private service: ProductsService, private serviceC: CartService) { }

  ngOnInit(): void {
    this.loading=true;
    this.panier = this.serviceC.getItems();
    this.loading = false;
  }

  deleteItem(product: Products) {
    for( let i = 0; i < this.panier.length; i++){
        if ( this.panier[i] === product) {
            this.panier.splice(i, 1);
            return 0;
        }
    }
  }

}
