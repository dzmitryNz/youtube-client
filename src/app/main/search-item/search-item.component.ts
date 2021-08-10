import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GREENDAYS, REDDAYS } from 'src/app/shared/constants';
import { SearchItem } from '../../shared/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.sass']
})
export class SearchItemComponent implements OnInit {
  borderBottom: object = {'border-bottom': 'solid 3px blue'};

  @Input() item!: SearchItem;

  @Output() openItem = new EventEmitter<SearchItem['id']>();

  ngOnInit(): void {
    const now = Date.now();
    const published = Date.parse(this.item.snippet.publishedAt);
    const daysFromPublish = (now - published) / 86400000;
    if(daysFromPublish > GREENDAYS) this.borderBottom = {'border-bottom': 'solid 3px green'};
    if(daysFromPublish > REDDAYS) this.borderBottom = {'border-bottom': 'solid 3px red'};
  }
}
