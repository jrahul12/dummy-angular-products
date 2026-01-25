import { Component, OnInit } from '@angular/core';
import { Imobile } from 'src/app/model/mobile';
import { MobileService } from 'src/app/services/mobile.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {


  mobileArr: Imobile[] = [];

  constructor(private _mobile: MobileService) { }

  ngOnInit(): void {
    this.fetchAll();   // call it here
  }

  fetchAll() {
    this._mobile.fetchAll().subscribe(res => {
      this.mobileArr = res.products;
    });
  }
}
