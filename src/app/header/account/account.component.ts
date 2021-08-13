import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.sass']
})

export class AccountComponent implements OnInit {
  showProfile = false;
  isLogin = false;
  userName = 'YourName';

  ngOnInit(): void { }

  toggleShowProfile() { this.showProfile = !this.showProfile };

  login() { this.isLogin = !this.isLogin };

  setting() { this.showProfile = false };

}
