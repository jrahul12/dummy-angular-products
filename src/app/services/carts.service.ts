import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  CART: string = environment.BEAUTY
  CART_URL: string = `${this.CART}/carts`
  constructor(private _http: HttpClient) { }

  fetchAll(): Observable<{ carts: Icart[] }> {
    return this._http.get<{ carts: Icart[] }>(this.CART_URL);
  }

}
