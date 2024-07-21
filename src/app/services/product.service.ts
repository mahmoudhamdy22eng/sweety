import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://api.example.com/products';
  getBannerData(): Observable<any[]> {
    return of([
      {
        id: 1,
        title: 'Summer Sale',
        description: 'Get up to 50% off on all sweets!',
        imageUrl:
          'https://images.unsplash.com/photo-1603731655243-045407d29b2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        title: 'New Arrivals',
        description: 'Check out our new collection of sweets!',
        imageUrl:
          'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ]);
  }

  getCategoriesHome(): Observable<any[]> {
    return of([
      {
        id: 1,
        name: 'Chocolates',
        imageUrl:
          'https://images.unsplash.com/photo-1553452118-621e1f860f43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        name: 'Candies',
        imageUrl:
          'https://images.unsplash.com/photo-1502579347381-2a885e40f6b0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 3,
        name: 'Cakes',
        imageUrl:
          'https://images.unsplash.com/photo-1509474520651-53cf6a80536f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ]);
  }

  getFeaturedProducts(): Observable<any[]> {
    return of([
      {
        id: 1,
        name: 'Chocolate Cake',
        price: 10.99,
        imageUrl:
          'https://images.unsplash.com/photo-1586985289906-406988974504?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 2,
        name: 'Candy Box',
        price: 5.99,
        imageUrl:
          'https://images.unsplash.com/photo-1519087318609-bfb5c04c27f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        id: 3,
        name: 'Macarons',
        price: 7.99,
        imageUrl:
          'https://images.unsplash.com/photo-1624715134921-1edcb167a254?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ]);
  }
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/categories`);
  }

  getSortOptions(): string[] {
    return [
      'Price: Low to High',
      'Price: High to Low',
      'Name: A to Z',
      'Name: Z to A',
    ];
  }
  getProductById(productId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${productId}`);
  }

  getRelatedProducts(productId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${productId}/related`);
  }
}
