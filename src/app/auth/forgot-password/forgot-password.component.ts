import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  email: string = '';
  message: string | null = null;
  error: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  forgotPassword(): void {
    this.authService.forgotPassword(this.email).subscribe(
      (response) => {
        this.message = 'A password reset link has been sent to your email.';
        this.error = null;
      },
      (error) => {
        this.error = 'Failed to send password reset email. Please try again.';
        this.message = null;
      }
    );
  }
}
