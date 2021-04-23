import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UsersService} from '../users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  loading = false;
  user: User;
  id: number;
  users: User[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: UsersService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.loading = true;
    this.service.getUsers().subscribe(users => {
      this.users = users;
      console.log(users);
      this.user = users[this.id-1];
      console.log(this.user);
      this.loading = false;
    },
      error => {
        this.loading = false;
        this.toastr.error(`${error} failed: ${error.message}`, 'Error')
          .onHidden
          .subscribe(t => this.router.navigate(['/home']));
    });
  }

  editUser() {
    this.router.navigate(['./user/edit', this.user.id]);
  }

}
