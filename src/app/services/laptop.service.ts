import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILaptop } from '../model/laptop';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  LAPTOP: string = environment.MOBILE;
  LAPTOP_URL: string = `${this.LAPTOP}/search?q=laptop`;

  constructor(private _http: HttpClient) { }

  fetchAll(): Observable<{ products: ILaptop[] }> {
    return this._http.get<{ products: ILaptop[] }>(this.LAPTOP_URL);
  }
  fetchById(id: number) {
    return this._http.get<ILaptop>(`${this.LAPTOP}/${id}`);
  }

}
