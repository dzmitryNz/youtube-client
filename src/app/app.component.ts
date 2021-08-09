import { Component, Input, Output } from '@angular/core';
import { searchRes } from './app.constants';
import { SearchResponse } from './shared/models/search-response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @Input() searchResponse: String = '';
  @Input() searchRes: SearchResponse = {};

  @Output() items = searchRes.items;
}
