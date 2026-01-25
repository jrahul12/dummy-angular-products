import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IProduct } from '../model/product';
import { Ibeauty } from '../model/beauty';

@Injectable({
  providedIn: 'root'
})
export class BeautyService {

  BEAUTY: string = environment.BEAUTY;
  BEAUTY_URL: string = `${this.BEAUTY}/products`;

  constructor(private _http: HttpClient) { }

  fetchAll(): Observable<{ products: Ibeauty[] }> {
    return this._http.get<{ products: Ibeauty[] }>(this.BEAUTY_URL);
  }

  fetchById(id: number): Observable<Ibeauty> {
    return this._http.get<Ibeauty>(`${this.BEAUTY_URL}/${id}`);
  }
}
