import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {map, tap} from 'rxjs/operators';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService{
  private readonly apiUrl = environment.apiUrl;
  private userUrl =this.apiUrl + 'user';

  constructor(private http: HttpClient) {
  }

  //Retourne tout les utilisateurs
  getUsers(): Observable<User[]>{
    return this.http.get<Observable<any>>(this.userUrl)
      .pipe(
        tap((rep: any) => console.log(rep)),
        map(rep => {
          return rep;
        })
      );
  }
}
