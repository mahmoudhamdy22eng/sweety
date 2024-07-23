import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent {
  wishlistItems: any[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getWishlist().subscribe((items) => {
      this.wishlistItems = items;
    });
  }

  moveToCart(itemId: number): void {
    this.accountService.moveToCart(itemId).subscribe(() => {
      this.wishlistItems = this.wishlistItems.filter(
        (item) => item.id !== itemId
      );
    });
  }

  removeFromWishlist(itemId: number): void {
    this.accountService.removeFromWishlist(itemId).subscribe(() => {
      this.wishlistItems = this.wishlistItems.filter(
        (item) => item.id !== itemId
      );
    });
  }
}
