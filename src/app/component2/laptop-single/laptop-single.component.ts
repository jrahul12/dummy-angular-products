import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILaptop } from 'src/app/model/laptop';
import { LaptopService } from 'src/app/services/laptop.service';

@Component({
  selector: 'app-laptop-single',
  templateUrl: './laptop-single.component.html',
  styleUrls: ['./laptop-single.component.scss']
})
export class LaptopSingleComponent implements OnInit {

  product!: ILaptop;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private laptopService: LaptopService
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
    this.laptopService.fetchById(id).subscribe(res => {
      this.product = res;
    });
  }

  addToCart() {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    if (!Array.isArray(cart)) {
      cart = [];
    }

    const item = {
      id: this.product.id,
      image: this.product.thumbnail,
      product: this.product,
      qty: 1
    };

    const existing = cart.find(
      (c: any) => c.id == this.product.id
    );

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }

}
