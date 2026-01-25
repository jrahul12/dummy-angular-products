import { Component, OnInit } from '@angular/core';
import { Igrocery } from 'src/app/model/grocery';
import { GroceryService } from 'src/app/services/grocery.service';

@Component({
  selector: 'app-grocary',
  templateUrl: './grocary.component.html',
  styleUrls: ['./grocary.component.scss']
})
export class GrocaryComponent implements OnInit {

  constructor(private _grocery: GroceryService) { }
  groceryArr: any[] = []
  ngOnInit(): void {
    this.fetchAll()
  }
  fetchAll() {
    this._grocery.fetchGroceries().subscribe(res => {
      this.groceryArr = res.products;  
    });
  }
}
