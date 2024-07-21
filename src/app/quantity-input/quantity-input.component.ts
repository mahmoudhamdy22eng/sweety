import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.component.html',
  styleUrls: ['./quantity-input.component.css'],
})
export class QuantityInputComponent {
  @Input() quantity: number = 1;
  @Output() quantityChange = new EventEmitter<number>();

  increaseQuantity(): void {
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  onQuantityChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.quantity = Number(input.value);
    this.quantityChange.emit(this.quantity);
  }
}
