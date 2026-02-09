import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeautyService } from 'src/app/services/beauty.service';
import { IProduct } from 'src/app/model/product';
import { Ibeauty } from 'src/app/model/beauty';

@Component({
  selector: 'app-single-beauty',
  templateUrl: './single-beauty.component.html',
  styleUrls: ['./single-beauty.component.scss']
})
export class SingleBeautyComponent implements OnInit {

  product!: Ibeauty;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private beautyService: BeautyService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      if (this.id) {
        this.fetchById(this.id);
      }
    });
  }

  fetchById(id: number) {
    this.beautyService.fetchById(id).subscribe(res => {
      this.product = res;
    });
  }

  addToCart() {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    if (!Array.isArray(cart)) {
      cart = [];
    }

    const item = {
      product: this.product,
      qty: 1,
      type: 'beauty'  
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
  }


}
