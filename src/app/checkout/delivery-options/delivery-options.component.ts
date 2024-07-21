import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-delivery-options',
  templateUrl: './delivery-options.component.html',
  styleUrls: ['./delivery-options.component.css'],
})
export class DeliveryOptionsComponent implements OnInit {
  deliveryMethods = [
    'Standard Delivery',
    'Express Delivery',
    'Next Day Delivery',
  ];
  selectedMethod = '';

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.checkoutService.getDeliveryMethod().subscribe((method) => {
      this.selectedMethod = method;
    });
  }

  updateDeliveryMethod(method: string): void {
    this.selectedMethod = method;
    this.checkoutService.updateDeliveryMethod(method).subscribe((response) => {
      console.log('Delivery method updated successfully', response);
    });
  }
}
