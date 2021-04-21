import { Component, OnInit } from '@angular/core';
import {Products} from "../models/products.model";
import {ProductsService} from "../products/products.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  products: Products[];
  panier: Products[];
  loading = false;
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
  this.loading=true;
    this.service.getProducts().subscribe(products => {
      this.products = products;
      this.panier = [products[1]];
      console.log(products);

      this.loading = false
    });
  }

}
