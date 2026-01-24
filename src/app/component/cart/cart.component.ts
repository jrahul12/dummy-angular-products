import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProduct } from 'src/app/model/product';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  product!: IProduct;
  qty: number = 1;

  constructor(private _snackBar: SnackbarService,
    private _matDailog: MatDialog
  ) { }

  ngOnInit() {
    const stored = localStorage.getItem('cart');

    if (stored) {
      const data = JSON.parse(stored);
      this.product = data.product;
      this.qty = data.qty;
    }
  }

  increase() {
    this.qty++;
    this.saveCart();
  }

  decrease() {
    if (this.qty > 1) {
      this.qty--;
      this.saveCart();
    }
  }

  remove() {
    let dialog = this._matDailog.open(ConfirmComponent, {
      width: '400px',
      disableClose: true
    })
    dialog.afterClosed().subscribe((input: boolean) => {
      if (input) {
        localStorage.removeItem('cart');
        this.product = undefined as any;
        this.qty = 1;
        this._snackBar.snackBar(`Product Removed SuccessFully`)
      }
    })

  }

  saveCart() {
    const cartObj = {
      product: this.product,
      qty: this.qty
    };
    localStorage.setItem('cart', JSON.stringify(cartObj));
  }

  get total() {
    return (this.product.price * this.qty).toFixed(2);
  }
}
