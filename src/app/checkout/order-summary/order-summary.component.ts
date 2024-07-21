import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
})
export class OrderSummaryComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;
  shippingInfo: any = {};
  deliveryMethod: string = '';
  paymentMethod: string = '';

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
    this.cartService.getCartTotal().subscribe((total) => {
      this.total = total;
    });
    this.checkoutService.getShippingInfo().subscribe((info) => {
      this.shippingInfo = info;
    });
    this.checkoutService.getDeliveryMethod().subscribe((method) => {
      this.deliveryMethod = method;
    });
    this.checkoutService.getPaymentMethod().subscribe((method) => {
      this.paymentMethod = method;
    });
  }

  placeOrder(): void {
    const order = {
      items: this.cartItems,
      total: this.total,
      shippingInfo: this.shippingInfo,
      deliveryMethod: this.deliveryMethod,
      paymentMethod: this.paymentMethod,
    };

    this.checkoutService.placeOrder(order).subscribe(
      (response) => {
        alert('Order placed successfully!');
        // Clear cart or navigate to confirmation page
        this.cartService.clearCart();
      },
      (error) => {
        console.error('Error placing order', error);
        alert('There was an error placing your order. Please try again.');
      }
    );
  }
}
