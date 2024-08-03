import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  userInfo: any = {};
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(): void {
    this.accountService.getPersonalInfo().subscribe({
      next: (data) => this.userInfo = data,
      error: (error) => this.errorMessage = 'Error fetching user info.'
    });
  }

  updateUserInfo(): void {
    this.accountService.updatePersonalInfo(this.userInfo).subscribe({
      next: (response) => {
        this.successMessage = 'User information updated successfully.';
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = 'Error updating user info.';
        this.successMessage = '';
      }
    });
  }
}
