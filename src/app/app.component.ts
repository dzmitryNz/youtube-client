import { Component, Output } from '@angular/core';
import { default as resJson } from './shared/res.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  @Output() items = resJson.items;

}
