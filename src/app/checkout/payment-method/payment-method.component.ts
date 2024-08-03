import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css'],
})
export class PaymentMethodComponent implements OnInit {
  @Output() paymentMethodChange = new EventEmitter<string>();

  paymentMethods = ['Cash on Delivery', 'Credit Card', 'PayPal'];
  selectedMethod = this.paymentMethods[0];

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.checkoutService.getPaymentMethod().subscribe((method: any) => {
      this.selectedMethod = method.method || this.paymentMethods[0];
      this.updatePaymentMethod(this.selectedMethod);
    });
  }

  updatePaymentMethod(method: string): void {
    this.selectedMethod = method;
    this.paymentMethodChange.emit(this.selectedMethod); // Emit selected payment method
    this.checkoutService.updatePaymentMethod(method).subscribe((response) => {
      console.log('Payment method updated successfully', response);
    });
  }
}






// import { Component, OnInit } from '@angular/core';
// import { CheckoutService } from 'src/app/services/checkout.service';

// @Component({
//   selector: 'app-payment-method',
//   templateUrl: './payment-method.component.html',
//   styleUrls: ['./payment-method.component.css'],
// })
// export class PaymentMethodComponent implements OnInit {
//   paymentMethods = ['Cash on Delivery'];
//   selectedMethod = 'Cash on Delivery';

//   constructor(private checkoutService: CheckoutService) {}

//   ngOnInit(): void {
//     this.checkoutService.getPaymentMethod().subscribe((method) => {
//       this.selectedMethod = method;
//     });
//   }

//   updatePaymentMethod(method: string): void {
//     this.selectedMethod = method;
//     this.checkoutService.updatePaymentMethod(method).subscribe((response) => {
//       console.log('Payment method updated successfully', response);
//     });
//   }
// }
