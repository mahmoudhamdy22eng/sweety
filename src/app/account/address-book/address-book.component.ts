import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css'],
})
export class AddressBookComponent implements OnInit {
  addresses: any[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAddresses().subscribe((addresses) => {
      this.addresses = addresses;
    });
  }

  deleteAddress(addressId: number): void {
    this.accountService.deleteAddress(addressId).subscribe(() => {
      this.addresses = this.addresses.filter(
        (address) => address.id !== addressId
      );
    });
  }
}
