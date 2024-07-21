import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: '',
  };
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        // Save the token and navigate to the account dashboard
        localStorage.setItem('token', response.token);
        this.router.navigate(['/account/dashboard']);
      },
      (error) => {
        this.error = 'Invalid email or password';
      }
    );
  }
}
