import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  searchStr: string = "";
  sentence: string = "";
  showSettings = false;
  sortedBy: string = '';

  @Output() setFilter = new EventEmitter<string>();
  @Output() setSort = new EventEmitter<string>();
  @Output() setRequest = new EventEmitter<string>();

  request(searchStr: string) { if(searchStr) this.setRequest.emit(searchStr) }

  toggleSettings() { this.showSettings = !this.showSettings }

  accountSettings() { this.showSettings = !this.showSettings }

  sort(by: string) {
    this.sortedBy = this.sortedBy === by ? `${by}-` : by ;
    this.setSort.emit(this.sortedBy);
    }

  filter(sentence: string) { this.setFilter.emit(sentence) }
}
