import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.css'],
})
export class CarouselSliderComponent {
  products = [
    {
      id: '1',
      title: 'BIGGER MYSTERY BOX',
      vendor: 'SoSweet',
      price: '£50.00',
      link: '/products/bigger-mystery-box',
      image:
        'https://www.sosweetshop.co.uk/cdn/shop/files/bigger-mystery-box-873122.png?v=1711368716&width=460',
    },
    {
      id: '2',
      title: 'MASSIVE MYSTERY BOX',
      vendor: 'SoSweetShopUK',
      price: '£80.00',
      link: '/products/massive-mystery-box',
      image:
        'https://www.sosweetshop.co.uk/cdn/shop/files/massive-mystery-box-952352.png?v=1711369751&width=460',
    },
    {
      id: '3',
      title: 'American Mystery Box',
      vendor: 'SoSweet',
      price: '£20.00',
      link: '/products/american-mystery-box',
      image:
        'https://www.sosweetshop.co.uk/cdn/shop/files/july-4th-mystery-box-603588.jpg?v=1720206277&width=460',
    },
  ];
}
