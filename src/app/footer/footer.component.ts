import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  showHeaderFooter = true;
  public underline = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeaderFooter =
          ![
            '/auth/login',
            '/auth/register',
            '/page-not-found',
            '**',
          ].some((route) => event.url.startsWith(route));
      }
    });
  }
}
