import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AmazonProduct } from '../model/amazon';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  BASE_URL: string = environment.AMAZON
  PRODUCT: string = `${this.BASE_URL}/products`

  constructor(private _http: HttpClient) { }

  fetchAll() {
    this._http.get<AmazonProduct[]>(this.PRODUCT)
  }

}
