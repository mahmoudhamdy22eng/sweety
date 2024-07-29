import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^01[0-9]{9}$/), // Assuming phone numbers start with 01 and have 11 digits
        ]
      ],
      password_confirmation: ['', Validators.required],
      cbox: [false, Validators.requiredTrue],
    }, {
      validators: this.mustMatch('password', 'password_confirmation'), // Corrected to 'validators'
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.registerForm.controls;
  }

  mustMatch(controlName: string, matchingControlName: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control = formGroup.get(controlName);
      const matchingControl = formGroup.get(matchingControlName);

      if (matchingControl?.errors && !matchingControl.errors['mustMatch']) {
        return null;
      }

      if (control?.value !== matchingControl?.value) {
        matchingControl?.setErrors({ mustMatch: true });
        return { mustMatch: true };
      } else {
        matchingControl?.setErrors(null);
        return null;
      }
    };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        () => this.router.navigate(['/auth/login']),
        error => {
          if (error.error && error.error.email && error.error.email[0] === 'The email has already been taken.') {
            this.error = 'The email has already been taken.';
          } else {
            this.error = 'Registration failed. Please try again.';
          }
          console.error(error);
        }
      );
    } else {
      this.error = 'Please fill in all required fields correctly.';
    }
  }
}
