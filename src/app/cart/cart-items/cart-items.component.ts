import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent implements OnInit {

  cartItems: any[] = [];
  private quantityUpdate = new Subject<{ productId: number, quantity: number }>();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });

    // Handle debounced quantity updates
    this.quantityUpdate.pipe(
      debounceTime(1000), // Wait 1 second
      distinctUntilChanged((prev, curr) => prev.quantity === curr.quantity),
      switchMap(({ productId, quantity }) => this.cartService.updateQuantity(productId, quantity))
    ).subscribe(() => {
      this.cartService.loadCart(); // Refresh the cart to get updated totals
    });
  }

  updateQuantity(productId: number, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const quantity = parseInt(inputElement.value, 10);
    if (!isNaN(quantity)) {
      // Emit the quantity change
      this.quantityUpdate.next({ productId, quantity });
    }
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId).subscribe(() => {
      this.cartItems = this.cartItems.filter((item) => item.product_id !== productId);
      this.cartService.loadCart(); // Refresh the cart to get updated totals
    });
  }
}





//   cartItems: any[] = [];

//   constructor(private cartService: CartService) {}

//   ngOnInit(): void {
//     this.cartService.getCartItems().subscribe((items) => {
//       this.cartItems = items;
//     });
//   }

//   updateQuantity(productId: number, event: Event): void {
//     const inputElement = event.target as HTMLInputElement;
//     const quantity = parseInt(inputElement.value, 10);
//     if (!isNaN(quantity)) {
//       this.cartService.updateQuantity(productId, quantity);
//     }
//   }

//   removeFromCart(productId: number): void {
//     this.cartService.removeFromCart(productId);
//   }
// }
