import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
    name: 'namefilter',
    pure: false
})
export class NameFilterPipe implements PipeTransform {
    transform(items: SearchItem[], filter: string): any {
        console.log(filter)
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => {
          console.log(item)
          item.snippet.title.indexOf(filter) !== -1
        });
    }
}
