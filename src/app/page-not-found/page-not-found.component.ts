import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
  host: { '[class.showHeaderFooter]': 'false' }
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router) {
  }
  ngOnInit(): void {
  }
}


