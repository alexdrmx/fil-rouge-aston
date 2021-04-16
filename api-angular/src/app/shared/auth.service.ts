import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/user.model';
import {map, tap} from 'rxjs/operators';

// Setup headers
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    Accept: 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = environment.apiUrl;
  private registerUrl = this.apiUrl + 'user/register';
  private loginUrl = this.apiUrl + 'user/login';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentPlayer')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  onLogin(user: any): Observable<{} | User> {
    const request = JSON.stringify({email: user.email, password: user.password});
    const url = this.loginUrl;
    return this.http.post(this.loginUrl, request, httpOptions)
      .pipe(
        tap(data => {
          console.log('le retour', data);
        }),
        map((data: any) => {
          let utilisateur;
          utilisateur = User.parse(data[0]);
          console.log(this.currentUser);
          localStorage.setItem('currentUser', JSON.stringify(utilisateur));
          this.currentUserSubject.next(utilisateur);
          return utilisateur;
        }));
  }

  logout() {
    localStorage.removeItem('currentPlayer');
    this.currentUserSubject.next(null);
  }

  onRegister(valeur: { user: User, pwd: string }) {
    const request = JSON.stringify({
      nom: valeur.user.nom,prenom: valeur.user.prenom, email: valeur.user.email,telephone: valeur.user.telephone, password: valeur.pwd
    });
    return this.http.post(this.registerUrl, request, httpOptions)
      .pipe(
        tap(data => {
          console.log('le retour du register', data);
        }),
        map((data: any) => {
          let utilisateur;
          utilisateur = User.parse(data)
          return utilisateur;
        }));
  }
}
