import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'https://api.example.com/cart'; // Replace with your actual API URL
  private cartItems = new BehaviorSubject<any[]>([]);
  private cartTotal = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {
    this.loadCart();
  }

  private loadCart(): void {
    this.http.get<any[]>(this.apiUrl).subscribe((items) => {
      this.cartItems.next(items);
      this.updateCartTotal();
    });
  }

  getCartItems(): Observable<any[]> {
    return this.cartItems.asObservable();
  }

  getCartTotal(): Observable<number> {
    return this.cartTotal.asObservable();
  }

  addToCart(product: any): void {
    this.http.post<any[]>(`${this.apiUrl}/add`, product).subscribe((items) => {
      this.cartItems.next(items);
      this.updateCartTotal();
    });
  }

  updateQuantity(productId: number, quantity: number): void {
    this.http
      .post<any[]>(`${this.apiUrl}/update`, { productId, quantity })
      .subscribe((items) => {
        this.cartItems.next(items);
        this.updateCartTotal();
      });
  }

  removeFromCart(productId: number): void {
    this.http
      .delete<any[]>(`${this.apiUrl}/remove/${productId}`)
      .subscribe((items) => {
        this.cartItems.next(items);
        this.updateCartTotal();
      });
  }

  clearCart(): void {
    this.http.delete<any[]>(`${this.apiUrl}/clear`).subscribe((items) => {
      this.cartItems.next(items);
      this.cartTotal.next(0);
    });
  }

  private updateCartTotal(): void {
    const currentItems = this.cartItems.value;
    const total = currentItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    this.cartTotal.next(total);
  }
}
