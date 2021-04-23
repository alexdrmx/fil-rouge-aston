import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../users.service';
import {User} from '../../models/user.model';


@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  loading = false;
  user: User = null;
  users: User[];

  constructor(private route: ActivatedRoute, private router: Router, private service: UsersService) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.loading = true;
    this.service.getUsers().subscribe(users => {
      this.users = users;
      this.user = users[id-1]
      console.log(this.user);
      this.loading = false;
    });
  }

  update($event: {user: User, pwd: string}) {
    this.service.updateUser($event.user, $event.pwd).subscribe(player => {
      this.router.navigate(['./user', this.user.id]);
    });
  }
}
