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

}
