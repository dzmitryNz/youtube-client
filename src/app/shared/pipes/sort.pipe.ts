import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sortpipe',
  pure: false
})

export class SortPipe implements PipeTransform {
  transform(items: SearchItem[], sortby: string): any {
    if (!items || !sortby) return items;
    switch(sortby) {
      case 'count':
        return items.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
      case 'date':
        return items.sort((a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt));
      case 'count-':
        return items.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
      case 'date-':
        return items.sort((a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt));
      default:
        return items;
      }
    }
}
