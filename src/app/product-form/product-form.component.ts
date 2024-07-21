import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  @Input() productId: string[] = [];
  quantity: number = 1;

  constructor(private router: Router) {}

  addToCart(event: Event): void {
    event.preventDefault();
    console.log(
      `Product ${this.productId} added to cart with quantity ${this.quantity}`
    );
    this.router.navigate(['/cart']);
  }
}
