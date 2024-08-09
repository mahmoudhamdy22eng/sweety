import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  products: any[] = [];
  paginatedProducts: any[] = [];
  categories: any[] = [];
  userId: any;
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 0;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const hashedId = this.route.snapshot.paramMap.get('id');
    if (hashedId) {
      this.userId = atob(hashedId);
    }

    let cond = this.userId ? `product_id=${this.userId}` : '';
    this.api.getProducts().subscribe({
      next: (products: any) => {
        this.api.getProductCategories().subscribe({
          next: (categories: any) => {
            this.categories = categories;
            this.products = products.map((product: any) => {
              const category = this.categories.find((cat: any) => cat.CategoryID === product.CategoryID);
              return { ...product, CategoryName: category ? category.CategoryName : 'Unknown' };
            });

            // Initialize pagination after products are loaded
            this.totalPages = Math.ceil(this.products.length / this.itemsPerPage);
            this.setPage(1);
          },
          error: (err: any) => {
            console.error('Error fetching categories:', err);
          }
        });
      },
      error: (err: any) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  setPage(page: number): void {
    this.currentPage = page;
    const start = (page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedProducts = this.products.slice(start, end);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.setPage(this.currentPage + 1);
    }
  }

  // Utility functions for encoding/decoding IDs
  encodeId(id: string): string {
    return btoa(id);
  }

  decodeId(encodedId: string): string {
    return atob(encodedId);
  }

  getSweetsImageUrl(image: string): string {
    return `http://localhost:8000/storage/${image}`;
  }
  getSnacksImageUrl(image: string): string {
    return `http://localhost:8000/storage/${image}`;
  }
  getDrinksImageUrl(image: string): string {
    return `http://localhost:8000/storage/${image}`;
  }
  getIceCreamImageUrl(image: string): string {
    return `http://localhost:8000/storage/${image}`;
  }

  // Function to delete a product
  toggleProduct(productId: number): void {
    const product = this.products.find((product: any) => product.id === productId);
    if (product) {
      this.api.toggleProductStatus(productId).subscribe({
        next: (data: any) => {
          const productIndex = this.products.findIndex((product: any) => product.id === productId);
          if (productIndex !== -1) {
            this.products[productIndex].is_deleted = data.product.is_deleted;
            this.setPage(this.currentPage); // Refresh current page
          } else {
            console.error('Product not found in local products array after API update.');
          }
        },
        error: (err: any) => {
          console.error('Error updating product:', err);
        }
      });
    }
  }

  toggleHasNutritionalInfo(productId: number): void {
    const product = this.products.find((product: any) => product.id === productId);
    if (product) {
      const newHasNutritionalInfo = product.HasNutritionalInfo === 0 ? 1 : 0;

      this.api.updateProduct(productId, { ...product, HasNutritionalInfo: newHasNutritionalInfo }).subscribe({
        next: (data: any) => {
          const productIndex = this.products.findIndex((product: any) => product.id === productId);
          if (productIndex !== -1) {
            this.products[productIndex].HasNutritionalInfo = newHasNutritionalInfo;
            this.setPage(this.currentPage); // Refresh current page
          } else {
            console.error('Product not found in local products array after API update.');
          }
        },
        error: (err: any) => {
          console.error('Error updating product:', err);
        }
      });
    }
  }

  toggleIsCustomizable(productId: number): void {
    const product = this.products.find((product: any) => product.id === productId);
    if (product) {
      const newIsCustomizable = product.IsCustomizable === 0 ? 1 : 0;

      this.api.updateProduct(productId, { ...product, IsCustomizable: newIsCustomizable }).subscribe({
        next: (data: any) => {
          const productIndex = this.products.findIndex((product: any) => product.id === productId);
          if (productIndex !== -1) {
            this.products[productIndex].IsCustomizable = newIsCustomizable;
            this.setPage(this.currentPage); // Refresh current page
          } else {
            console.error('Product not found in local products array after API update.');
          }
        },
        error: (err: any) => {
          console.error('Error updating product:', err);
        }
      });
    }
  }

  
    category =[{name:"Sweets",route:'sweets'},{name:"Snacks",route:'snacks'},
                {name:"Drinks",route:'drinks'},
                {name:"Ice Cream",route:'icecream'}];

    currentSection: string = 'sweets'; // Default to 'stores' section

    // Method to show/hide sections based on clicked category
                showSection(route: string) {
                  this.currentSection = route;
                }
}












