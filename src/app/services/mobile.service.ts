import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imobile } from '../model/mobile';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  MOBILE: string = environment.MOBILE
  MOBILE_URL: string = `${this.MOBILE}/search?q=phone`

  constructor(private _http: HttpClient) { }

  fetchAll(): Observable<{ products: Imobile[] }> {
    return this._http.get<{ products: Imobile[] }>(this.MOBILE_URL);
  }

  fetchById(id: number) {
    return this._http.get<Imobile>(`${this.MOBILE}/${id}`);
  }


}
