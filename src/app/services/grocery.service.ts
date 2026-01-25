import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Igrocery } from '../model/grocery';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  GROCERY: string = environment.GROCERY;
  GROCERY_URL: string = `${this.GROCERY}/search?categories_tags_en=groceries&page_size=12`;

  constructor(private http: HttpClient) { }

  fetchGroceries(): Observable<Igrocery> {
    return this.http.get<Igrocery>(this.GROCERY_URL);
  }

}
