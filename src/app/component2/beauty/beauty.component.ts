import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ibeauty } from 'src/app/model/beauty';
import { IProduct } from 'src/app/model/product';
import { BeautyService } from 'src/app/services/beauty.service';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.scss']
})
export class BeautyComponent implements OnInit {

  constructor(private _beauty: BeautyService) { }

  beautyArr: Ibeauty[] = []
  ngOnInit(): void {
    this.fetchAll()
  }

  fetchAll() {
    this._beauty.fetchAll().subscribe(res => {
      this.beautyArr = res.products;
    });
  }


}
