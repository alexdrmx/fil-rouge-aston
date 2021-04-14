import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Products} from '../models/products.model'
import {map, tap} from 'rxjs/operators';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductsService{
  private readonly apiUrl = environment.apiUrl;
  private productsUrl =this.apiUrl + 'products';

  constructor(private http: HttpClient) {
  }

  //Retourne tout les products
  getProducts(): Observable<Products[]>{
    return this.http.get<Observable<any>>(this.productsUrl)
      .pipe(
        tap((rep: any) => console.log(rep)),
        map(rep => {
          return rep;
        })
      );
  }
}
