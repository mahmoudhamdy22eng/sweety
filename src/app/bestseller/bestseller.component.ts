import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.css']
})
export class BestsellerComponent {

  products: {
    image: string;
    name: string;
    description: string;
    price: number;
  }[] = [
    {
      image: 'assets/images/candy1.jpg',
      name: 'Candy Delight',
      description: 'A delightful mix of fruity candies.',
      price: 9.99,
    },
    {
      image: 'assets/images/chocolate1.jpg',
      name: 'Chocolate Heaven',
      description: 'Rich and creamy chocolates for every occasion.',
      price: 14.99,
    },
    {
      image: 'assets/images/candy2.jpg',
      name: 'Sour Surprise',
      description: 'A tangy twist on classic sweets.',
      price: 7.99,
    },
    {
      image: 'assets/images/candy3.jpg',
      name: 'Gummy Bears',
      description: 'Colorful and chewy gummy bears.',
      price: 5.99,
    },
    {
      image: 'assets/images/chocolate2.jpg',
      name: 'Dark Chocolate Bites',
      description: 'Decadent dark chocolate bites.',
      price: 12.99,
    },
    {
      image: 'assets/images/candy4.jpg',
      name: 'Lollipop Wonderland',
      description: 'A variety of colorful lollipops.',
      price: 6.99,
    },
    {
      image: 'assets/images/candy5.jpg',
      name: 'Marshmallow Treats',
      description: 'Soft and fluffy marshmallows.',
      price: 4.99,
    },
    {
      image: 'assets/images/chocolate3.jpg',
      name: 'Milk Chocolate Bars',
      description: 'Creamy milk chocolate bars.',
      price: 11.99,
    },
    {
      image: 'assets/images/candy6.jpg',
      name: 'Hard Candy Mix',
      description: 'A mix of hard candies.',
      price: 8.99,
    },
    // Add more products as needed
  ];


  // products: any[] = [];
  filteredProducts: any[] = [];
  selectedCategory: string = '';
  selectedSortOption: string = '';


  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
    });

    // let typepet = this.route.snapshot.paramMap.get('id');
    // console.log(typepet);
    // if(typepet != null){
    //   let cond = 'pet_type_no=2 and pet_id='+typepet;
    //   this.api.get_pets(cond)
    //   .subscribe({next:(data:any)=>{
    //     console.log(data[0]);
    //     this.dogs=data;
    //   }})
    // }else{
    //   let cond = 'pet_type_no=2';

    //   this.api.get_pets(cond)
    //   .subscribe({next:(data:any)=>{
    //     console.log(data[0]);
    //     this.dogs=data;
    //   }})
    // }
  
  }

  

  sortProducts(sortOption: string): void {
    this.selectedSortOption = sortOption;
    this.applySorting();
  }
  

  

  private applySorting(): void {
    if (this.selectedSortOption) {
      switch (this.selectedSortOption) {
        case 'Price: Low to High':
          this.filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case 'Price: High to Low':
          this.filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case 'Name: A to Z':
          this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'Name: Z to A':
          this.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
      }
    }
  }
}
