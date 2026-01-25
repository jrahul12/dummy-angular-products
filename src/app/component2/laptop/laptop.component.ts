import { Component, OnInit } from '@angular/core';
import { ILaptop } from 'src/app/model/laptop';
import { LaptopService } from 'src/app/services/laptop.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit {
  laptopArr: ILaptop[] = [];

  constructor(private _laptop: LaptopService) { }

  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll() {
    this._laptop.fetchAll().subscribe(res => {
      this.laptopArr = res.products;
    });
  }

}
