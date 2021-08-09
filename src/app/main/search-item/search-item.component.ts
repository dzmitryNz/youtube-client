import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchItem } from '../../shared/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.sass']
})
export class SearchItemComponent implements OnInit {
  @Input() item!: SearchItem;

  @Output() openItem = new EventEmitter<SearchItem['id']>();

  constructor() { }

  ngOnInit(): void {
  }

}
