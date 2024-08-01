import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AHeaderComponent {

  public underline = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {

  }

  // Method to check if the user is logged in
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  // Method to handle user logout
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to login page or home page after logout
  }
}
