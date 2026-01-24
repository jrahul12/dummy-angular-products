import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/model/product';
import { SnackbarService } from 'src/app/services/snackbar.service';

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
    private _snackBar:SnackbarService
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
    const cartObj = {
      product: this.product,
      qty: 1
    };

    localStorage.setItem('cart', JSON.stringify(cartObj));
    this._snackBar.snackBar(`Product Added To Cart SuccessFully`)
  }
}
