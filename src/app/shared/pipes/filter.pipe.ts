import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'titlefilter',
  pure: false
})

export class TitleFilterPipe implements PipeTransform {
  transform(items: SearchItem[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
// filter items array, items which match and return true will be
// kept, false will be filtered out
    // console.log('filter', filter)
    return items.filter(item => item.snippet.title.toLowerCase().includes(filter.toLowerCase()));
    }
}
