import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public showHeaderFooter = true;
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

  get showHeader(): boolean {
    return this.showHeaderFooter;
  }
}

