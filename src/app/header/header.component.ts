import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public showHeaderFooter = true;
  public underline = false;

  constructor(private router: Router, private authService: AuthService) {}

  menuItems = [
    {
      title: 'Best Sellers',
      link: '/bestsellers',
      subMenu: []
    },
    {
      title: 'By Candy Type',
      link: '/pages/bulk-candy',
      subMenu: [
        {
          title: 'Individually Wrapped Candy',
          link: '/collections/individually-wrapped-candy',
          imgSrc: '//www.candystore.com/cdn/shop/files/Wrapped.jpg?v=1716897526&amp;width=85'
        },
        {
          title: 'Gummy Candy',
          link: '/collections/gummy-candy',
          imgSrc: '//www.candystore.com/cdn/shop/files/Gummy.jpg?v=1716897526&amp;width=85'
        },
        // add other sub-menu items here
      ]
    },
    {
      title: 'By Color',
      link: '/pages/colors',
      subMenu: [
        {
          title: 'Blue Candy',
          link: '/collections/blue-candy',
          imgSrc: '//www.candystore.com/cdn/shop/files/blue.webp?v=1716895601&amp;width=85'
        },
        {
          title: 'Pink Candy',
          link: '/collections/pink-candy',
          imgSrc: '//www.candystore.com/cdn/shop/files/pink.webp?v=1716895601&amp;width=85'
        },
        // add other sub-menu items here
      ]
    },
    // add other menu items here
  ];

  generateId(title: string): string {
    return 'HeaderMenu-' + title.replace(/\s+/g, '-').toLowerCase();
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      // if (event instanceof NavigationEnd) {
        const url = this.router.url;
        this.showHeaderFooter = !(
          url.startsWith('/admin') ||
          url === '/auth' ||
          url === '**' ||
          url === '/page-not-found'
        );
      }
    );
  }

  get showHeader(): boolean {
    return this.showHeaderFooter;
  }


  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }
}

