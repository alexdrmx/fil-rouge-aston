import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user.model";
import {UsersService} from "../../users/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  users: User[];
  constructor(private service: UsersService) { }

  ngOnInit(): void {
    console.log();
    this.loading=true;
    this.service.getUsers().subscribe(users => {
      this.users = users;
      console.log(users);
      this.loading = false
    });
  }

}
