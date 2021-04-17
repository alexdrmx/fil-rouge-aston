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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: UsersService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.loading = true;
    this.service.getUser(id).subscribe(rep => {
        console.log(rep);
        this.user = rep;
        this.loading = false;
      },
      error => {
        this.loading = false;
        /*this.toastr.error(`${error} failed: ${error.message}`, 'Error')
          .onHidden
          .subscribe(t => this.router.navigate(['./home']));*/
      });
  }

  editPlayer() {
    this.router.navigate(['./user/edit', this.user.id]);
  }

}
