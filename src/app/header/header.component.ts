import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CanActivate } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'Fire Angular App!';
  isLoggedIn: any;

  constructor(public auth: AuthService) {
    this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  }

  canActivate() {
    console.log('canActivate isLoggedIn LS: ',typeof JSON.parse(localStorage.getItem('isLoggedIn')));
    this.isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

  }
  public logout() {
    this.auth.logout();
  }

}
