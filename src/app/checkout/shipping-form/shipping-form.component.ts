import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css'],
})
export class ShippingFormComponent implements OnInit {
  @Output() shippingInfoChange = new EventEmitter<any>();

  shippingInfo = {
    id: 0,
    name: '',
    address: '',
    city: '',
    postal_code: '',
    country: '',
  };

  private shippingInfoSubject = new Subject<any>();

  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.checkoutService.getShippingInfo().subscribe((info: any) => {
      if (info) {
        this.shippingInfo = info;
        this.emitShippingInfo(); // Emit the initial info
      }
    });

    // Emit changes with debouncing
    this.shippingInfoSubject.pipe(
      debounceTime(1000), // Debounce for 1 second
      distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr))
    ).subscribe((info) => {
      this.shippingInfoChange.emit(info); // Emit changes to parent
    });
  }

  updateShippingInfo(): void {
    this.checkoutService.updateShippingInfo(this.shippingInfo).subscribe((response) => {
      console.log('Shipping info updated successfully', response);
      this.shippingInfo.id = response.id; // Update the ID
      this.emitShippingInfo();
    });
  }

  emitShippingInfo(): void {
    this.shippingInfoSubject.next(this.shippingInfo);
  }
}







// import { Component, OnInit } from '@angular/core';
// import { CheckoutService } from 'src/app/services/checkout.service';

// @Component({
//   selector: 'app-shipping-form',
//   templateUrl: './shipping-form.component.html',
//   styleUrls: ['./shipping-form.component.css'],
// })
// export class ShippingFormComponent implements OnInit {
//   shippingInfo = {
//     name: '',
//     address: '',
//     city: '',
//     postalCode: '',
//     country: '',
//   };

//   constructor(private checkoutService: CheckoutService) {}

//   ngOnInit(): void {
//     this.checkoutService.getShippingInfo().subscribe((info) => {
//       this.shippingInfo = info;
//     });
//   }

//   updateShippingInfo(): void {
//     this.checkoutService
//       .updateShippingInfo(this.shippingInfo)
//       .subscribe((response) => {
//         console.log('Shipping info updated successfully', response);
//       });
//   }
// }
