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
  private registerUrl = this.apiUrl + 'register';
  private loginUrl = this.apiUrl + 'login';
  private currentPlayerSubject: BehaviorSubject<User>;
  public currentPlayer: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentPlayerSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentPlayer')));
    this.currentPlayer = this.currentPlayerSubject.asObservable();
  }

  public get currentPlayerValue(): User {
    return this.currentPlayerSubject.value;
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
          const player = User.parse(data.data.player);
          //this.storeToken(data, player);
          return player;
        }));
  }

  /*storeToken(data: any, player: User) {
    User.accessToken = data.data.token;
    localStorage.setItem('currentPlayer', JSON.stringify(player));
    console.log('Joueur : ', player);
    this.currentPlayerSubject.next(player);
  }*/

  logout() {
    localStorage.removeItem('currentPlayer');
    this.currentPlayerSubject.next(null);
  }

  onRegister(valeur: { user: User, pwd: string }) {
    const request = JSON.stringify({
      name: valeur.user.nom, email: valeur.user.email, password: valeur.pwd
    });

    return this.http.post(this.registerUrl, request, httpOptions)
      .pipe(
        tap(data => {
          console.log('le retour du register', data);
        }),
        map((data: any) => {
          const user = User.parse(data.data.player);
          //this.storeToken(data, player);
          return user;
        }));
  }
}
