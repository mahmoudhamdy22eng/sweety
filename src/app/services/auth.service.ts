import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// import {jwtDecode} from 'jwt-decode';
import { JwtPayload, jwtDecode as jwt_decode } from 'jwt-decode';

interface DecodedToken extends JwtPayload {
  user_type: string;
  // Add other properties from the token payload if needed
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private router: Router) {}

  getCurrentUser(): DecodedToken | null {
    const token = this.getToken();
    if (token) {
      return jwt_decode<DecodedToken>(token);
    }
    return null;
  }
  getRole(): string | null {
    const currentUser = this.getCurrentUser();
    return currentUser ? currentUser.user_type : null;
  }
  

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  logout(): void {
    this.http.post(`${this.apiUrl}/logout`, {}).subscribe(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    });
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  resendVerificationEmail(): Observable<any> {
    return this.http.post(`${this.apiUrl}/email/resend`, {});
  }


  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email });
  }
}

