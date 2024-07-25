import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  public showHeaderFooter = true;
  public underline = false;

  constructor(private router: Router) {}

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeaderFooter =
          ![
            '/admin',
            '/page-not-found',
          ].some((route) => event.url.startsWith(route));
      }
    });
  }

  get showHeader(): boolean {
    return this.showHeaderFooter;
  }
}
