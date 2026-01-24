import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/model/product';
import { FilterService } from 'src/app/services/filter.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  constructor(private _product: ProductService,
    private _search: FilterService
  ) { }

  searchval: string = ''
  prodArr: IProduct[] = []
  ngOnInit(): void {
    this.search()
    this.fetchAll()
  }
  fetchAll() {
    this._product.fetchAll().subscribe(res => {
      this.prodArr = res
    })
  }
  search() {
    this._search.search$.subscribe(res => {
      this.searchval = res
    })
  }

}
