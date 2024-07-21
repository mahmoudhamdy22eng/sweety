import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sweets';
  showHeaderFooter = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = this.router.url;
        this.showHeaderFooter = !(
          url === '/page-not-found' ||
          url === '/auth/login' ||
          url === '/auth/register' ||
          url === '/auth/forgot-password'
        );
      }
    });
  }

  ngOnInit() {
    const url = this.router.url;
    this.showHeaderFooter = !(
      url === 'page-not-found' ||
      url === '/auth/login' ||
      url === '/auth/register' ||
      url === '/auth/forgot-password'
    );
  }
}
