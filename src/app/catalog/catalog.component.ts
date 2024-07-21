import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  selectedCategory: string = '';
  selectedSortOption: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  filterProducts(category: string): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  sortProducts(sortOption: string): void {
    this.selectedSortOption = sortOption;
    this.applySorting();
  }

  private applyFilters(): void {
    if (this.selectedCategory) {
      this.filteredProducts = this.products.filter(
        (product) => product.category === this.selectedCategory
      );
    } else {
      this.filteredProducts = this.products;
    }
    this.applySorting();
  }

  private applySorting(): void {
    if (this.selectedSortOption) {
      switch (this.selectedSortOption) {
        case 'Price: Low to High':
          this.filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case 'Price: High to Low':
          this.filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case 'Name: A to Z':
          this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'Name: Z to A':
          this.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
      }
    }
  }
}
