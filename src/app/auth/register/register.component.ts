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
  selectedRole: string | null = null; // New property to track user role

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

  selectRole(role: string): void {
    this.selectedRole = role;
    console.log('Selected Role:', role);
  }

  onSubmit(): void {
    if (this.registerForm.valid && this.selectedRole) { // Ensure role is selected
      const formData = {
        ...this.registerForm.value,
        user_type: this.selectedRole // Add user_type to form data
      };

      this.authService.register(formData).subscribe(
        response => {
          console.log('Registration successful:', response); // Debugging line
          this.router.navigate(['/auth/login']);
        },
        error => {
          if (error.status === 400 && error.error && error.error.email && error.error.email[0] === 'The email has already been taken.') {
            this.error = 'The email has already been taken.';
          } else {
            this.error = 'Registration failed. Please try again.';
          }
          console.error('Registration error:', error); // Debugging line
        }
      );
    } else {
      this.error = 'Please fill in all required fields correctly and select a role.';
    }
  }
}
