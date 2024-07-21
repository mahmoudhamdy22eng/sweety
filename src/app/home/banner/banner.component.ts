import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  banners = [
    {
      link: 'https://www.sosweetshop.co.uk/collections/gift-jars',
      image:
        'https://cdn.shopify.com/s/files/1/0634/5592/0349/files/pick-n-mix-jars.jpg?v=1720796076',
    },
    {
      link: 'https://www.sosweetshop.co.uk/collections/jelly-belly',
      image:
        'https://cdn.shopify.com/s/files/1/0634/5592/0349/files/jelly_belly_sweets.jpg?v=1719323510',
    },
    {
      link: 'https://www.sosweetshop.co.uk/products/sosweet-giant-cable-pouches-500g',
      image:
        'https://cdn.shopify.com/s/files/1/0634/5592/0349/files/Cable_banner_v3.png?v=1718885314',
    },
    {
      link: 'https://www.sosweetshop.co.uk/collections/freeze-dried-sweets',
      image:
        'https://cdn.shopify.com/s/files/1/0634/5592/0349/files/freeze-dried-sweets.jpg?v=1720599111',
    },
    {
      link: 'https://www.sosweetshop.co.uk/collections/minion',
      image:
        'https://cdn.shopify.com/s/files/1/0634/5592/0349/files/minions-sweets.jpg?v=1720613054',
    },
    {
      link: 'https://www.sosweetshop.co.uk/collections/teacher-gifts',
      image:
        'https://cdn.shopify.com/s/files/1/0634/5592/0349/files/teacher-gifts.jpg?v=1721048742',
    },
  ];
}
