import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProduct } from 'src/app/model/product';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ConfirmComponent } from '../confirm/confirm.component';
import { CartService } from 'src/app/service2/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartArr: any[] = [];
  total = 0;

  constructor(private cartService: CartService,
    private _matDailog: MatDialog,
    private _snackBar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.loadCart();
  }
  loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    if (!Array.isArray(cart)) {
      cart = [];
    }

    this.cartArr = cart;
    this.calculateTotal();
  }


  increase(item: any) {
    item.qty += 1;
    this.saveCart();
  }

  decrease(item: any) {
    if (item.qty > 1) {
      item.qty -= 1;
      this.saveCart();
    }
  }

  remove(item: any) {
    let dailog = this._matDailog.open(ConfirmComponent, {
      width: '400px',
      disableClose: true
    })
    dailog.afterClosed().subscribe((input: boolean) => {
      if (input) {
        this.cartArr = this.cartArr.filter(i => i.product.id !== item.product.id);
        this.saveCart();
        this._snackBar.snackBar(`Item Removed SuccessFully!!`)
      }
    })
  }

  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartArr));
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartArr.reduce(
      (sum, item) => sum + item.product.price * item.qty,
      0
    );
  }

}
