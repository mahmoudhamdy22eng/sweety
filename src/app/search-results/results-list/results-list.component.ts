import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css'],
})
export class ResultsListComponent implements OnInit {
  products: any[] = [];
  filters: any = {};

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    // Fetch initial products based on the current query
    this.searchService
      .searchProducts(this.filters.query)
      .subscribe((products) => {
        this.products = products;
      });
  }

  applyFilters(filters: any): void {
    this.filters = filters;
    this.searchService.filterProducts(filters).subscribe((products) => {
      this.products = products;
    });
  }
}
