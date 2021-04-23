import { Component, OnInit } from '@angular/core';
import {Products} from "../models/products.model";
import {ProductsService} from "../products/products.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  products: Products[];
  length: number;
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.loading=true;
    this.service.getProducts().subscribe(products => {
      this.products = products;
      this.length = this.products.length;
      console.log(products);
      console.log(this.length)
      this.loading = false
    });
  }

}
