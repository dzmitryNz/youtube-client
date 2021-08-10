import { Component, Input, Output } from '@angular/core';
import { default as resJson } from './shared/res.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @Input() searchRequest: String = '';

  @Output() items = resJson.items;
}
