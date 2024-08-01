import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  

  public underline = false;

  constructor(private router: Router, private authService: AuthService) {}
// Method to show/hide sections based on clicked category
showSection(route: string): void {
}
  ngOnInit(): void {

  }
  

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  // Method to handle user logout
  logout(): void {
    this.authService.logout();
    this.router.navigate(['auth/login']); // Redirect to login page or home page after logout
  }
}
