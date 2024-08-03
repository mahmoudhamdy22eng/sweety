import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-delivery-options',
  templateUrl: './delivery-options.component.html',
  styleUrls: ['./delivery-options.component.css'],
})
export class DeliveryOptionsComponent implements OnInit {
  deliveryMethods = [
    { value: 1, name: 'Standard Delivery' },
    { value: 2, name: 'Express Delivery' },
    { value: 3, name: 'Next Day Delivery' },
  ];

  selectedMethod = this.deliveryMethods[0]; // Default to the first option

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.checkoutService.getDeliveryMethod().subscribe((method) => {
      // Find the delivery method object that matches the name
      const matchedMethod = this.deliveryMethods.find(m => m.name === method.name);
      if (matchedMethod) {
        this.selectedMethod = matchedMethod;
      }
    });
  }

  updateDeliveryMethod(method: { value: number; name: string }): void {
    this.selectedMethod = method;
    this.checkoutService.updateDeliveryMethod(method.name).subscribe((response) => {
      console.log('Delivery method updated successfully', response);
    });
  }
}
