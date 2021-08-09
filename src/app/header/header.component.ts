import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  response: string = "";
  sentance: string = "";
  showSettings = false;

  @Output() setFilter = new EventEmitter<string>();

  setResponse(response: string) { console.log('Response:', response) }

  toggleSettings() { this.showSettings = !this.showSettings }

  sortBy(by: string) { console.log(by) }

  filter(sentance: string) { console.log('Sentance:', sentance)
  this.setFilter.emit(sentance) }
}
