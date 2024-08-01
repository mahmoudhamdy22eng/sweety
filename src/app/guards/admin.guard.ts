import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const role = this.authService.getRole();
    console.log('User Role:', role); // Debugging line

    if (this.authService.isLoggedIn() && role === 'admin') {
      console.log('User is admin'); // Debugging line
      return true;
    } else {
      console.log('User is not admin or not logged in'); // Debugging line
      this.router.navigate(['/page-not-found']);
      return false;
    }
  }

}
