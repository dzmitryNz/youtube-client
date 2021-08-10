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

  ngOnInit(): void {}

  onOpenItem(id: SearchItem['id']) {
    console.log('https://www.youtube.com/watch?v=' + id)
  }

  filter(sentence: string) { this.filterargs = sentence };

  sort(sortby: string) { this.sortby = sortby };
}
