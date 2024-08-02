import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private apiUrl = 'http://localhost:8000/api/cart';
  private cartItems = new BehaviorSubject<any[]>([]);
  private cartTotal = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
    if (this.authService.isLoggedIn()) {
      this.loadCart();
    }
  }

  public loadCart(): void {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });

    this.http.get<any[]>(this.apiUrl, { headers }).subscribe((items) => {
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

  addToCart(product_id: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });

    return this.http.post(`${this.apiUrl}/add`, { product_id }, { headers });
  }

  updateQuantity(product_id: number, quantity: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });

    return this.http.patch<{ cartItems: any[], total: number }>(
      `${this.apiUrl}/update`,
      { product_id, quantity },
      { headers }
    ).pipe(
      tap((response) => {
        this.cartItems.next(response.cartItems);
        this.cartTotal.next(response.total);
      })
    );
  }

  removeFromCart(product_id: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });

    return this.http.delete(`${this.apiUrl}/remove/${product_id}`, { headers }).pipe(
      tap(() => {
        const updatedItems = this.cartItems.value.filter((item) => item.product_id !== product_id);
        this.cartItems.next(updatedItems);
        this.updateCartTotal();
      })
    );
  }

  clearCart(): void {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken()}`,
    });

    this.http.delete<any[]>(`${this.apiUrl}/clear`, { headers }).subscribe(() => {
      this.cartItems.next([]);
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
  
    isAuthenticated(): boolean {
    return this.authService.isLoggedIn();
  }

  redirectToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}






//   private apiUrl = 'http://localhost:8000/api/cart';
//   private cartItems = new BehaviorSubject<any[]>([]);
//   private cartTotal = new BehaviorSubject<number>(0);

//   constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
//     if (this.authService.isLoggedIn()) {
//       this.loadCart();
//     }
//   }

//   private loadCart(): void {
//     const headers = new HttpHeaders({
//       Authorization: `Bearer ${this.authService.getToken()}`,
//     });

//     this.http.get<any[]>(this.apiUrl, { headers }).subscribe((items) => {
//       this.cartItems.next(items);
//       this.updateCartTotal();
//     });
//   }

//   getCartItems(): Observable<any[]> {
//     return this.cartItems.asObservable();
//   }

//   getCartTotal(): Observable<number> {
//     return this.cartTotal.asObservable();
//   }

//   addToCart(productId: number): Observable<any> {
//     const headers = new HttpHeaders({
//       Authorization: `Bearer ${this.authService.getToken()}`,
//     });

//     return this.http.post(`${this.apiUrl}/add`, { product_id: productId }, { headers });
//   }

//   updateQuantity(productId: number, quantity: number): void {
//     const headers = new HttpHeaders({
//       Authorization: `Bearer ${this.authService.getToken()}`,
//     });

//     this.http
//       .patch<any[]>(`${this.apiUrl}/update`, { product_id: productId, quantity }, { headers })
//       .subscribe((items) => {
//         this.cartItems.next(items);
//         this.updateCartTotal();
//       });
//   }

//   removeFromCart(productId: number): void {
//     const headers = new HttpHeaders({
//       Authorization: `Bearer ${this.authService.getToken()}`,
//     });

//     this.http
//       .delete<any[]>(`${this.apiUrl}/remove/${productId}`, { headers })
//       .subscribe((items) => {
//         this.cartItems.next(items);
//         this.updateCartTotal();
//       });
//   }

//   clearCart(): void {
//     const headers = new HttpHeaders({
//       Authorization: `Bearer ${this.authService.getToken()}`,
//     });

//     this.http.delete<any[]>(`${this.apiUrl}/clear`, { headers }).subscribe(() => {
//       this.cartItems.next([]);
//       this.cartTotal.next(0);
//     });
//   }

//   isAuthenticated(): boolean {
//     return this.authService.isLoggedIn();
//   }

//   redirectToLogin(): void {
//     this.router.navigate(['/auth/login']);
//   }

//   private updateCartTotal(): void {
//     const currentItems = this.cartItems.value;
//     const total = currentItems.reduce(
//       (sum, item) => sum + item.price * item.quantity,
//       0
//     );
//     this.cartTotal.next(total);
//   }
// }
