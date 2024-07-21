import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiUrl = 'https://api.example.com/products'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  searchProducts(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?search=${query}`);
  }

  filterProducts(filters: any): Observable<any[]> {
    const { category, priceRange } = filters;
    let filterUrl = `${this.apiUrl}?`;

    if (category) {
      filterUrl += `category=${category}&`;
    }
    if (priceRange) {
      filterUrl += `minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&`;
    }

    return this.http.get<any[]>(filterUrl);
  }
}
