import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  response: string = "";
  sentance: string = "";
  showSettings = false;

  setResponse(response: string) { console.log('Response:', response) }

  toggleSettings() { this.showSettings = !this.showSettings }

  sortByDate() { console.log('by date') }
  sortByCount() { console.log('by count') }
  filter(sentance: string) { console.log('Sentance:', sentance) }
}
