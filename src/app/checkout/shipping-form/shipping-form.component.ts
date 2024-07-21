import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css'],
})
export class ShippingFormComponent implements OnInit {
  shippingInfo = {
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  };

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.checkoutService.getShippingInfo().subscribe((info) => {
      this.shippingInfo = info;
    });
  }

  updateShippingInfo(): void {
    this.checkoutService
      .updateShippingInfo(this.shippingInfo)
      .subscribe((response) => {
        console.log('Shipping info updated successfully', response);
      });
  }
}
