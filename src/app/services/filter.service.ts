import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  search$: Subject<string> = new Subject<string>
}
