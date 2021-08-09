import { Component, Input, Output } from '@angular/core';
import { searchRes } from './app.constants';
import { SearchItem } from './shared/models/search-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @Input() searchRes: String = '';

  @Output() searchResponse = searchRes;
}
