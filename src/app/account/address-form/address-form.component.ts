import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
})
export class AddressFormComponent implements OnInit {
  address = {
    id: null,
    name: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  };
  isEditMode = false;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const addressId = this.route.snapshot.paramMap.get('id');
    if (addressId) {
      this.isEditMode = true;
      this.accountService.getAddresses().subscribe((addresses) => {
        const address = addresses.find((addr) => addr.id === +addressId);
        if (address) {
          this.address = address;
        }
      });
    }
  }

  saveAddress(): void {
    if (this.isEditMode && this.address.id != null) {
      this.accountService
        .updateAddress(this.address.id, this.address)
        .subscribe(() => {
          this.router.navigate(['/account/address-book']);
        });
    } else {
      this.accountService.addAddress(this.address).subscribe(() => {
        this.router.navigate(['/account/address-book']);
      });
    }
  }
}
