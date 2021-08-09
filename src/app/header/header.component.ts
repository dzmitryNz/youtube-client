import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  response: string = "";
  title = 'youtube-header'

  setResponse(response: string) {
    console.log('Response:', response)
  }
}
