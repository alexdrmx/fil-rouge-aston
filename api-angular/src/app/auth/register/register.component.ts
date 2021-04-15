import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsersValidators} from "../../users/users.validators";
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  error: any;

  user: User = new User(-1,'','','','','');

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return {invalid: true};
    }
  }

  createForm() {
    this.registerForm = new FormGroup({
      nom: new FormControl('', [Validators.required, Validators.minLength(6)]),
      prenom: new FormControl('', [Validators.required, Validators.minLength(6)]),
      telephone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pwd: new FormGroup({
          password: new FormControl(undefined, [Validators.required, Validators.minLength(4)]),
          confirmPassword: new FormControl(undefined)
        }, [this.passwordConfirming]
      ),
    });
  }

  get nom() {
    return this.registerForm.get('nom');
  }

  get prenom() {
    return this.registerForm.get('prenom')
  }

  get telephone(){
    return this.registerForm.get('telephone')
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('pwd.password');
  }

  get confirmPassword() {
    return this.registerForm.get('pwd.confirmPassword');
  }


  onSubmit() {
    this.user.nom = this.nom.value;
    this.user.prenom = this.prenom.value;
    this.user.telephone = this.telephone.value;
    this.user.email = this.email.value;
    this.user.nom = `${this.user.nom}`;
    const pwd = this.password.value;
    this.authService.onRegister({user: this.user, pwd: this.password.value})
      .subscribe(data => {
          this.router.navigate(['/']);
        },
        error => {
          console.log('erreur en retour : ', error);
          this.error = error;
          this.loading = false;
        });
  }
}
