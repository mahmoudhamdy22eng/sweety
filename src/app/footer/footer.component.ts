import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private router: Router) {}
  isLogined() {
    // return this.route.url == '/login' || this.route.url == '/home';
    return (
      this.router.url == '/auth/login' || this.router.url == '/auth/register'
    );
  }
}
