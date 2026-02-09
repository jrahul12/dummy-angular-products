import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/model/product';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-product-single-card',
  templateUrl: './product-single-card.component.html',
  styleUrls: ['./product-single-card.component.scss']
})
export class ProductSingleCardComponent implements OnInit {

  product!: IProduct;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private _snackBar: SnackbarService,
    private _matDailog: MatDialog
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.http
      .get<IProduct>(`https://fakestoreapi.com/products/${id}`)
      .subscribe(res => {
        this.product = res;
      });
  }
  addToCart() {
    let dailog = this._matDailog.open(ConfirmComponent, {
      width: '400px',
      disableClose: true
    })
    dailog.afterClosed().subscribe((input: boolean) => {
      if (input) {
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');

        if (!Array.isArray(cart)) {
          cart = [];
        }

        const item = {
          product: this.product,
          qty: 1
        };

        const existing = cart.find(
          (c: any) => c.product.id == this.product.id
        );

        if (existing) {
          existing.qty += 1;
        } else {
          cart.push(item);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        this._snackBar.snackBar(`Cart Added SuccessFully!!`)
      }
    })
  }


}
