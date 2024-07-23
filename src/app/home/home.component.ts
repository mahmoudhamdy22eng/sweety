import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products: {
    image: string;
    name: string;
    description: string;
    price: number;
  }[] = [
    {
      image: 'assets/candy1.jpg',
      name: 'Candy Delight',
      description: 'A delightful mix of fruity candies.',
      price: 9.99,
    },
    {
      image: 'assets/chocolate1.jpg',
      name: 'Chocolate Heaven',
      description: 'Rich and creamy chocolates for every occasion.',
      price: 14.99,
    },
    {
      image: 'assets/candy2.jpg',
      name: 'Sour Surprise',
      description: 'A tangy twist on classic sweets.',
      price: 7.99,
    },
    {
      image: 'assets/candy3.jpg',
      name: 'Gummy Bears',
      description: 'Colorful and chewy gummy bears.',
      price: 5.99,
    },
    {
      image: 'assets/chocolate2.jpg',
      name: 'Dark Chocolate Bites',
      description: 'Decadent dark chocolate bites.',
      price: 12.99,
    },
    {
      image: 'assets/candy4.jpg',
      name: 'Lollipop Wonderland',
      description: 'A variety of colorful lollipops.',
      price: 6.99,
    },
    {
      image: 'assets/candy5.jpg',
      name: 'Marshmallow Treats',
      description: 'Soft and fluffy marshmallows.',
      price: 4.99,
    },
    {
      image: 'assets/chocolate3.jpg',
      name: 'Milk Chocolate Bars',
      description: 'Creamy milk chocolate bars.',
      price: 11.99,
    },
    {
      image: 'assets/candy6.jpg',
      name: 'Hard Candy Mix',
      description: 'A mix of hard candies.',
      price: 8.99,
    },
    // Add more products as needed
  ];
}
