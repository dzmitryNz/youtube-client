import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  searchReq: string = "";
  sentence: string = "";
  showSettings = false;

  @Output() setFilter = new EventEmitter<string>();

  setRequest(searchReq: string) { console.log('request:', searchReq) }

  toggleSettings() { this.showSettings = !this.showSettings }

  accountSettings() { this.showSettings = !this.showSettings }

  sortBy(by: string) { console.log(by) }

  filter(sentence: string) { console.log('Sentance:', sentence)
  this.setFilter.emit(sentence) }
}
