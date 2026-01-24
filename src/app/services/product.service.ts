import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL: string = environment.BASE_URL
  PRODUCT_URL: string = `${this.BASE_URL}/products`

  constructor(private _http: HttpClient) { }

  fetchAll(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.PRODUCT_URL)
  }
}
