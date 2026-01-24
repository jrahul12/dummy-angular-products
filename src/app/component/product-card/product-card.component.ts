import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProduct } from 'src/app/model/product';
import { ConfirmComponent } from '../confirm/confirm.component';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product!: IProduct;

  constructor(private _matDailog: MatDialog,
    private _snackBar:SnackbarService
  ) { }

  addToCart() {
    const dialog = this._matDailog.open(ConfirmComponent, {
      width: '400px',
      disableClose: true
    });

    dialog.afterClosed().subscribe((input: boolean) => {
      if (input) {
        const cartObj = {
          product: this.product,
          qty: 1
        };

        localStorage.setItem('cart', JSON.stringify(cartObj));
        this._snackBar.snackBar(`Product Added To Cart`)
      }
    });
  }
}
