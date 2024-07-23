import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getCart().subscribe((items) => {
      this.cartItems = items;
    });
  }

  updateQuantity(itemId: number, quantity: number): void {
    this.accountService.updateCartQuantity(itemId, quantity).subscribe(() => {
      this.cartItems = this.cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      );
    });
  }

  removeFromCart(itemId: number): void {
    this.accountService.removeFromCart(itemId).subscribe(() => {
      this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
    });
  }
}
