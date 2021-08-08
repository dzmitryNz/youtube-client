import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from '../../shared/models/search-item.model';
import { SearchResponse } from '../../shared/models/search-response.model';

@Component({
  selector: 'app-search-response',
  templateUrl: './search-response.component.html',
  styleUrls: ['./search-response.component.sass']
})
export class SearchResponseComponent implements OnInit {
  @Input() searchResponse: SearchResponse = {};

  constructor() { }

  ngOnInit(): void {}

  onOpenItem(id: SearchItem['id']) {
    console.log(id)
  }

}
