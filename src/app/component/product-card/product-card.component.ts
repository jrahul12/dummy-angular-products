import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProduct } from 'src/app/model/product';
import { ConfirmComponent } from '../confirm/confirm.component';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { CartService } from 'src/app/service2/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product!: IProduct;

  constructor(
    private _matDialog: MatDialog,
    private _snackBar: SnackbarService,
    private cartService: CartService
  ) { }

  addToCart() {
    let dailog = this._matDialog.open(ConfirmComponent, {
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
