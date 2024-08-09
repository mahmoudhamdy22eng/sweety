import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SuccessmodalComponent } from 'src/app/admin/successmodal/successmodal.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
})
export class OrderSummaryComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;
  shippingInfo: any = {};
  deliveryMethods: { shipping_method: string; cost: number } = { shipping_method: '', cost: 0 };
  paymentMethod: string = '';
  dialog: any;

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((response: any) => {
      this.cartItems = response;
    });
    this.cartService.getCartTotal().subscribe((response: any) => {
      this.total = response;
    });
  }

  onShippingInfoUpdate(shippingInfo: any): void {
    this.shippingInfo = shippingInfo;
  }

  onDeliveryMethodUpdate(deliveryMethods: { shipping_method: string; cost: number }): void {
    this.deliveryMethods = deliveryMethods;
  }

  onPaymentMethodUpdate(paymentMethod: string): void {
    this.paymentMethod = paymentMethod;
  }

  placeOrder(): void {
    const order = {
      // shipping_method: this.deliveryMethods.shipping_method,
      shipping_cost: this.deliveryMethods.cost,
      // address_id: this.shippingInfo.id, // Ensure shippingInfo contains an ID
      address_id: 1,
      // payment_method: this.paymentMethod,
      payment_method: "Cash On Delivery",
      shipping_method: "Standard Delivery",
      items: JSON.stringify(this.cartItems), // Pass items if needed by the backend
      total: this.total // Pass total if needed by the backend
    };

    console.log("Placing order with data:", order); // Log the order for debugging

    this.checkoutService.placeOrder(order).subscribe({
      next: (response) => {
        this.cartService.clearCart().subscribe({
          next: () => {
            alert('Order placed successfully!');
          },
          error: (error) => {
            console.error('Error clearing the cart:', error);
            alert('There was an error placing your order. Please try again.');
          },
        });
      },
      error: (error) => {
        console.error('Error placing the order:', error);
        alert('There was an error placing your order. Please try again.');
      }
    });
  }
}







// import { Component, OnInit } from '@angular/core';
// import { CartService } from 'src/app/services/cart.service';
// import { CheckoutService } from 'src/app/services/checkout.service';

// @Component({
//   selector: 'app-order-summary',
//   templateUrl: './order-summary.component.html',
//   styleUrls: ['./order-summary.component.css'],
// })
// export class OrderSummaryComponent implements OnInit {
//   cartItems: any[] = [];
//   total: number = 0;
//   shippingInfo: any = {};
//   deliveryMethod: string = '';
//   paymentMethod: string = '';

//   constructor(
//     private cartService: CartService,
//     private checkoutService: CheckoutService
//   ) {}

//   ngOnInit(): void {
//     this.cartService.getCartItems().subscribe((items) => {
//       this.cartItems = items;
//     });
//     this.cartService.getCartTotal().subscribe((total) => {
//       this.total = total;
//     });
//     this.checkoutService.getShippingInfo().subscribe((info) => {
//       this.shippingInfo = info;
//     });
//     this.checkoutService.getDeliveryMethod().subscribe((method) => {
//       this.deliveryMethod = method;
//     });
//     this.checkoutService.getPaymentMethod().subscribe((method) => {
//       this.paymentMethod = method;
//     });
//   }

//   placeOrder(): void {
//     const order = {
//       items: this.cartItems,
//       total: this.total,
//       shippingInfo: this.shippingInfo,
//       deliveryMethod: this.deliveryMethod,
//       paymentMethod: this.paymentMethod,
//     };

//     this.checkoutService.placeOrder(order).subscribe(
//       (response) => {
//         alert('Order placed successfully!');
//         // Clear cart or navigate to confirmation page
//         this.cartService.clearCart();
//       },
//       (error) => {
//         console.error('Error placing order', error);
//         alert('There was an error placing your order. Please try again.');
//       }
//     );
//   }
// }
