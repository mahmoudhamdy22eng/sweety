import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccesscartComponent } from 'src/app/catalog/successcart/successcart.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {

  products: any[] = [];
  paginatedProducts: any[] = [];
  currentSort: string = 'best-selling';
  currentSortLabel: string = 'Best Selling';
  isDropdownVisible: boolean = false;
  currentPage: number = 1;
  productsPerPage: number = 12; // Default to 24 products per page
  totalPages: number = 1;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(cond: string = ''): void {
    this.productService.getProducts(cond).subscribe(
      data => {
        this.products = data;
        this.totalPages = Math.ceil(this.products.length / this.productsPerPage);
        this.setPaginatedProducts();
      },
      error => {
        console.error('Error fetching products', error);
      }
    );
  }

  setPaginatedProducts(): void {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;
    this.paginatedProducts = this.products.slice(startIndex, endIndex);
  }

  addToCart(productId: number): void {
    if (!this.cartService.isAuthenticated()) {
      this.cartService.redirectToLogin();
      return;
    }

    this.cartService.addToCart(productId).subscribe(
      () => {
        this.dialog.open(SuccesscartComponent, {
          data: { message: 'Product added to cart successfully!' },
        });
      },
      (error) => {
        console.error('Error adding to cart:', error);
      }
    );
  }

  getProducts(image: string): string {
    return `http://localhost:8000/storage/${image}`;
  }

  sortProducts(sortOption: string, sortLabel: string = ''): void {
    this.currentSortLabel = sortLabel || this.currentSortLabel;
    switch (sortOption) {
      case 'title-ascending':
        this.products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'title-descending':
        this.products.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'price-ascending':
        this.products.sort((a, b) => a.price - b.price);
        break;
      case 'price-descending':
        this.products.sort((a, b) => b.price - a.price);
        break;
      case 'created-descending':
        this.products.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
      case 'created-ascending':
        this.products.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
        break;
      default:
        this.products.sort((a, b) => a.name.localeCompare(b.name)); 
        break;
    }
    this.setPaginatedProducts();
  }

  setLimit(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.productsPerPage = Number(target.value);
    this.totalPages = Math.ceil(this.products.length / this.productsPerPage);
    this.currentPage = 1; 
    this.setPaginatedProducts();
  }

  toggleSortDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.setPaginatedProducts();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.setPaginatedProducts();
    }
  }
}
