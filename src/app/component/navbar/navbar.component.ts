import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _search: FilterService) { }

  ngOnInit(): void {
  }

  searchVal: string = '';

  onSearch() {
    this._search.search$.next(this.searchVal)
  }
}
