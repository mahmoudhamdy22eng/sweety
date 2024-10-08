import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private apiUrl = 'http://localhost:8000/api'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getPersonalInfo(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user`);
  }

  // updatePersonalInfo(info: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/personal-info`, info);
  // }
  updatePersonalInfo(info: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.put<any>('http://localhost:8000/api/user', info, { headers });
  }

  getOrderHistory(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/order-history`);
  }

  getAddresses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/addresses`);
  }

  addAddress(address: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/addresses`, address);
  }

  updateAddress(addressId: number, address: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/addresses/${addressId}`, address);
  }

  deleteAddress(addressId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/addresses/${addressId}`);
  }

  getWishlist(): Observable<any[]> {
    return this.http.get<any[]>('/api/wishlist');
  }

  moveToCart(itemId: number): Observable<any> {
    return this.http.post(`/api/wishlist/move-to-cart/${itemId}`, {});
  }

  removeFromWishlist(itemId: number): Observable<any> {
    return this.http.delete(`/api/wishlist/${itemId}`);
  }

  getCart(): Observable<any[]> {
    return this.http.get<any[]>('/api/cart');
  }

  updateCartQuantity(itemId: number, quantity: number): Observable<any> {
    return this.http.put(`/api/cart/${itemId}`, { quantity });
  }

  removeFromCart(itemId: number): Observable<any> {
    return this.http.delete(`/api/cart/${itemId}`);
  }
}
