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
}
