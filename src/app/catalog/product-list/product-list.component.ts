import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { SuccessmodalComponent } from 'src/app/admin/successmodal/successmodal.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products: any[] = [];

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private dialog: MatDialog
  ) {}

  addToCart(productId: number): void {
    if (!this.authService.isLoggedIn()) {
      this.authService.redirectToLogin();
      return;
    }

    this.cartService.addToCart(productId).subscribe(
      () => {
        // Open success modal
        this.dialog.open(SuccessmodalComponent, {
          data: { message: 'Product added to cart successfully!' },
        });
      },
      (error) => {
        console.error('Error adding to cart:', error);
        // Handle error, possibly show a message to the user
      }
    );
  }

  ngOnInit(): void {}
}
