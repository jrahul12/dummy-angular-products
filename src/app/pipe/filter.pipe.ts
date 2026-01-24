import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../model/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: IProduct[], searchVal: string) {
    if (!searchVal) {
      return arr
    }
    if (!arr) {
      return []
    }
    let filterArr = arr.filter(p => p.title.toLowerCase().includes(searchVal.toLowerCase()))
    return filterArr
  }

}
