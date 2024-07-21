import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private apiUrl = 'https://api.example.com/checkout'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getShippingInfo(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/shipping-info`);
  }

  updateShippingInfo(info: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/shipping-info`, info);
  }

  getDeliveryMethod(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/delivery-method`);
  }

  updateDeliveryMethod(method: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/delivery-method`, { method });
  }

  getPaymentMethod(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/payment-method`);
  }

  updatePaymentMethod(method: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/payment-method`, { method });
  }

  placeOrder(order: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/order`, order);
  }
}
