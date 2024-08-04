import { ProductService } from '../services/product.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccesscartComponent } from 'src/app/catalog/successcart/successcart.component';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.css']
})
export class BestsellerComponent {

  products: any[] = [];
  currentSort: string = 'best-selling';
  currentSortLabel: string = 'Best Selling';
  isDropdownVisible: boolean = false; // Track dropdown visibility



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
      },
      error => {
        console.error('Error fetching products', error);
      }
    );
  }

  addToCart(productId: number): void {
    if (!this.cartService.isAuthenticated()) {
      this.cartService.redirectToLogin();
      return;
    }

    this.cartService.addToCart(productId).subscribe(
      () => {
        // Open success modal
        this.dialog.open(SuccesscartComponent, {
          data: { message: 'Product added to cart successfully!' },
        });
      },
      (error) => {
        console.error('Error adding to cart:', error);
        // Handle error, possibly show a message to the user
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
      // Add more cases as needed
      default:
        this.products.sort((a, b) => a.name.localeCompare(b.name)); // Default to alphabetical sort
        break;
    }
  }

  setLimit(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const limit = Number(target.value);
  
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data.slice(0, limit); // Limit products shown
        this.sortProducts('best-selling');
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

  toggleSortDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible; // Toggle visibility
  }
}