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
  sorted: string = '';

  @Output() setFilter = new EventEmitter<string>();
  @Output() setSort = new EventEmitter<string>();
  @Output() setRequest = new EventEmitter<string>();

  request(searchReq: string) { this.setFilter.emit(searchReq) }

  toggleSettings() { this.showSettings = !this.showSettings }

  accountSettings() { this.showSettings = !this.showSettings }

  sort(by: string) {
    if(by == this.sorted) by=by+'-';
    this.setSort.emit(by);
    this.sorted = by;
    }

  filter(sentence: string) { this.setFilter.emit(sentence) }
}
