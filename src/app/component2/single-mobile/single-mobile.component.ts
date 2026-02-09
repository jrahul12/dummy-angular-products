import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Imobile } from 'src/app/model/mobile';
import { MobileService } from 'src/app/services/mobile.service';

@Component({
  selector: 'app-single-mobile',
  templateUrl: './single-mobile.component.html',
  styleUrls: ['./single-mobile.component.scss']
})
export class SingleMobileComponent implements OnInit {

  product!: Imobile;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private mobileService: MobileService
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
    this.mobileService.fetchById(id).subscribe(res => {
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
      type: 'mobile'
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
