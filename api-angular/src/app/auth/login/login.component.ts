import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";
import {UsersService} from "../../users/users.service";
import {ProductsService} from "../../products/products.service";
import {Products} from "../../models/products.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  products: Products[];
  users: User[];
  constructor(private service: UsersService, private serviceP: ProductsService) { }

  ngOnInit(): void {
    console.log();
    this.loading=true;
    this.serviceP.getProducts().subscribe(products => {
      this.products = products;
    });
    this.service.getUsers().subscribe(users => {
      this.users = users;
      this.loading = false
    });
  }

}
