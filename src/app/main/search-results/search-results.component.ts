import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from '../../shared/models/search-item.model';

@Component({
  selector: 'app-search-response',
  templateUrl: './search-response.component.html',
  styleUrls: ['./search-response.component.sass']
})
export class SearchResponseComponent implements OnInit {
  @Input() items: SearchItem[] = [];
  @Input() sort: string = '';
  @Input() filter: string = '';

  filterargs = this.filter;

  constructor() { }

  ngOnInit(): void {}

  onOpenItem(id: SearchItem['id']) {
    console.log('https://www.youtube.com/watch?v=' + id)
  }

  onFilter(sentance: any) {
    console.log(sentance)
    this.filter = sentance }

}
