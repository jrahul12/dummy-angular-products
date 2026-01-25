import { Component, OnInit } from '@angular/core';
import { CartsService } from 'src/app/services/carts.service';
import { Icart } from 'src/app/model/cart';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  cartArr: Icart[] = [];

  constructor(private _carts: CartsService) { }

  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll() {
    this._carts.fetchAll().subscribe(res => {
      this.cartArr = res.carts;
    });
  }
}
