import { Btc } from '../interfaces/btc.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();
    return items.filter((it: Btc) => this.filterOptions(it, searchText));

  }

  private filterOptions(it: Btc, searchText: string) {
    return (it.coin.toLowerCase().includes(searchText) ||
              it.profitPercentage === parseInt(searchText, 10) ||
              it.proft === parseInt(searchText, 10)  ||
              it.dateMoviment.toLowerCase().includes(searchText)
            );
  }
}

