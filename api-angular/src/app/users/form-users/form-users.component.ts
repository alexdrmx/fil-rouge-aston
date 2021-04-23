import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from "../users.service";
import {User} from "../../models/user.model";
import {AuthService} from '../../shared/auth.service';
import {UsersValidators} from "../users.validators";

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css']
})
export class FormUsersComponent implements OnInit {
  @Input() user: User;
  @Output() updatedUser: EventEmitter<{user: User, pwd: string}>;
  editForm: FormGroup;
  error: any;
  pageTitle: string;
  action: string;

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute, private service: UsersService) {
    this.updatedUser = new EventEmitter<{user: User, pwd: string}>();
  }

  createForm() {
    this.editForm = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.minLength(4)]),
      prenom: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email : new FormControl('', [Validators.required, Validators.email]),
      telephone: new FormControl('', []),
      pwd: new FormGroup({
          password: new FormControl(undefined, Validators.compose([Validators.minLength(4)])),
          confirmPassword: new FormControl(undefined)
        }, UsersValidators.passwordConfirming
      ),
    });
  }

  get nom() {
    return this.editForm.get('nom');
  }

  get password() {
    return this.editForm.get('pwd').get('password');
  }

  get confirmPassword() {
    return this.editForm.get('pwd').get('confirmPassword');
  }

  get prenom() {
    return this.editForm.get('prenom');
  }

  get email() {
    return this.editForm.get('email');
  }

  get telephone() {
    return this.editForm.get('telephone');
  }

  ngOnInit(): void {
    this.createForm();
    const id = this.user.id;
    if (id === -1){
      this.pageTitle = 'Inscription';
      this.action = 'create';
    } else {
      this.action = 'edit';
      this.pageTitle = "Edition du profil";
      this.fillForm();
    }

    console.log('Action: ', this.action);

  }

   fillForm() {
    this.editForm.patchValue({
      nom: this.user.nom,
      prenom : this.user.prenom,
      email: this.user.email,
      telephone: this.user.telephone,
    });
  }

  onSubmit() {
    let pwd;
    this.user.nom = this.nom.value;
    this.user.prenom = this.prenom.value;
    this.user.email = this.email.value;
    this.user.telephone = this.telephone.value;
    if (this.password.value) {
      pwd = this.password.value;
    }
    if (this.password.value) {
      pwd = this.password.value;
    }

    this.updatedUser.emit({
      user: this.user,
      pwd
    });
    console.log(this.updatedUser);
    this.router.navigate(['..']);
  }
}
