import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';

interface User {
  user_id: number;
  name: string;
  email: string;
  phone: string;
  user_type: string;
  is_admin: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8000/api'; // Update with your Laravel API base URL
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient) {
    // Initialize currentUserSubject with data from localStorage if available
    this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('currentUser')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  // Getter to access the current value of the currentUserSubject
  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  // Method to handle user login
  login(credentials: {email: string, password: string}): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`,credentials)
      .pipe(tap((response: any) => {
        // On successful login, store user details and JWT token in local storage
        if (response.status) {
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          localStorage.setItem('token', response.token);
          this.currentUserSubject.next(response.user);
        }
      }));
  }

  // Method to handle user logout
  logout(): void {
    // Remove user data from local storage
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }

  // Method to get the current user's role
  getRole(): string | null {
    return this.currentUserValue?.user_type || null;
  }

  // Method to check if a user is logged in
  isLoggedIn(): boolean {
    return this.currentUserValue !== null;
  }

  // Method to get the current user's information
  getCurrentUser(): User | null {
    return this.currentUserValue;
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/forgot-password`, { email });
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
