import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from '../../shared/models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass']
})
export class SearchResultsComponent implements OnInit {
  @Input() items: SearchItem[] = [];
  @Input() sortby: string = '';
  @Input() filterargs: string = '';
  @Input() searchRequest: string = '';
  filteredItems: SearchItem[] = [];

  ngOnInit(): void {  };

  onOpenItem(id: SearchItem['id']) { console.log('https://www.youtube.com/watch?v=' + id) };

  onSearchRequest(searchRequest: string) {
    console.log(searchRequest)
    this.filteredItems = this.items
  }

  filter(sentence: string) {
    console.log(sentence)
    if (!this.items || !sentence) this.filteredItems = this.items;
      else {
        this.filteredItems = this.items.filter(item => {
          return item.snippet.title.toLowerCase().includes(sentence.toLowerCase())
        });
      }
  };

  sort(sortby: string) {
    if (!this.items || !sortby) this.filteredItems = this.items;
    switch(sortby) {
      case 'count':
        this.filteredItems = this.filteredItems.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
        break;
      case 'date':
        this.filteredItems = this.filteredItems.sort((a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt));
        break;
      case 'count-':
        this.filteredItems = this.filteredItems.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
        break;
      case 'date-':
        this.filteredItems = this.filteredItems.sort((a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt));
        break;
      default:
        this.filteredItems = this.filteredItems;
        break;
    };
  }
}
