import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account-dashboard',
  templateUrl: './account-dashboard.component.html',
  styleUrls: ['./account-dashboard.component.css'],
})
export class AccountDashboardComponent implements OnInit {
  userInfo: any = {};
  errorMessage: string = '';

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(): void {
    const token = localStorage.getItem('token'); // Retrieve the stored token
    if (token) {
      this.accountService.getPersonalInfo().subscribe({
        next: (data) => (this.userInfo = data),
        error: (error) => (this.errorMessage = 'Error fetching user info.')
      });
    } else {
      this.errorMessage = 'User is not authenticated.';
    }
  }
}
