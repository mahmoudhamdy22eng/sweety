import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router) {}
  isLogined() {
    // return this.route.url == '/login' || this.route.url == '/home';
    return (
      this.router.url == '/auth/login' ||
      this.router.url == '/auth/register' ||
      this.router.url == '/page-not-found' ||
      this.router.url == '/auth/forgot-password'
    );
  }
}
