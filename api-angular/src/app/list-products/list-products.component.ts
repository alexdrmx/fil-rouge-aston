import { Component, OnInit } from '@angular/core';
import {Products} from "../models/products.model";
import {ProductsService} from "../products/products.service";
import {CartService} from "../products/cart.service";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  loading = false;
  products: Products[];

  constructor(private service: ProductsService, private serviceC: CartService) { }

  ngOnInit(): void {
    this.loading=true;
    this.service.getProducts().subscribe(products => {
      this.products = products;
      console.log(products);
      this.loading = false
    });
  }

  addToCart(product){
    this.serviceC.addToCart(product);
  }

}
