import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  products: any[] = [];
  query: string = '';

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params['query'] || '';
      if (this.query) {
        this.searchProducts(this.query);
      }
    });
  }

  searchProducts(query: string): void {
    this.searchService.searchProducts(query).subscribe((products) => {
      this.products = products;
    });
  }

  applyFilters(filters: any): void {
    this.searchService.filterProducts(filters).subscribe((products) => {
      this.products = products;
    });
  }
}
