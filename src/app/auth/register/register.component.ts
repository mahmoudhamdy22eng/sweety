import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        phone: [
          '',
          [
            Validators.required,
            Validators.pattern(/^01[0-9]{9}$/), // Assuming phone numbers start with 01 and have 11 digits
          ],
        ],
        confirmp: ['', Validators.required],
        cbox: [false, Validators.requiredTrue],
      },
      {
        validator: this.mustMatch('password', 'confirmp'),
      }
    );
  }

  ngOnInit(): void {}

  get f() {
    return this.form.controls;
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: AbstractControl) => {
      const control = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);

      if (matchingControl?.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control?.value !== matchingControl?.value) {
        matchingControl?.setErrors({ mustMatch: true });
      } else {
        matchingControl?.setErrors(null);
      }
    };
  }

  register(): void {
    if (this.form.invalid) {
      this.error = 'Please fill in all required fields correctly.';
      return;
    }

    this.authService.register(this.form.value).subscribe(
      (response) => {
        // Navigate to the login page
        this.router.navigate(['/auth/login']);
      },
      (error) => {
        this.error = 'Registration failed. Please try again.';
      }
    );
  }
}
