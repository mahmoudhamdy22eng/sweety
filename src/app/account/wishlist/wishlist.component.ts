import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishlistItems = [
    { name: 'Item 1', description: 'Description for item 1', price: 100 },
    { name: 'Item 2', description: 'Description for item 2', price: 200 },
    { name: 'Item 3', description: 'Description for item 3', price: 300 },
  ];
}