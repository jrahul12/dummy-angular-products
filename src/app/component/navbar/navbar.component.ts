import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _search: FilterService,
    private _router:Router
  ) { }

  isShow: boolean = false

  isSearch: boolean = false

  ngOnInit(): void {
  }

  searchVal: string = '';

  onSearch() {
    this._search.search$.next(this.searchVal)
  }

  onShow() {
    this.isShow = !this.isShow
  }

  onShowCart(){
    this._router.navigate(['cart'])
  }
}
