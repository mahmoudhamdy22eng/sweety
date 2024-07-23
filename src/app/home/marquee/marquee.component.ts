import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.css'],
})
export class MarqueeComponent {
  marqueeItems = [
    {
      icon: 'fa-truck',
      iconColor: '#FF5733',
      text: 'Free Shipping on Orders $100+',
      color: '#FFBD32',
    },
    {
      icon: 'fa-gift',
      iconColor: '#28a745',
      text: 'Special Discounts Available!',
      color: '#FF5733',
    },
    {
      icon: 'fa-star',
      iconColor: '#ffc107',
      text: 'Top Rated Products!',
      color: '#FFC300',
    },
    {
      icon: 'fa-heart',
      iconColor: '#dc3545',
      text: 'Customer Favorites!',
      color: '#FF5733',
    },
    {
      icon: 'fa-thumbs-up',
      iconColor: '#17a2b8',
      text: 'Quality Guaranteed!',
      color: '#C70039',
    },
    {
      icon: 'fa-candy-cane',
      iconColor: '#e83e8c',
      text: 'Sweetshop Delights!',
      color: '#FF69B4',
    },
    // Add more items as needed
  ];
}
