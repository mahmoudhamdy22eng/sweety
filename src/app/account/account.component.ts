import { Component, Type } from '@angular/core';
import { AddressBookComponent } from './address-book/address-book.component';
import { CartComponent } from '../cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  profile: any;
  items = [
    { title: 'Order History', component: OrderHistoryComponent },
    { title: 'Personal Info', component: PersonalInfoComponent },
    { title: 'Address Book', component : AddressBookComponent },
    { title: 'Wishlist', component: WishlistComponent },
    { title: 'Cart', component: CartComponent }
  ];

  navigateTo(component: any) {
    // Your navigation logic here
  }
}
