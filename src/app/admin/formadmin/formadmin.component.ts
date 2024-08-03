import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-formadmin',
  templateUrl: './formadmin.component.html',
  styleUrls: ['./formadmin.component.css']
})
export class FormadminComponent implements OnInit {

  adminForm: FormGroup;
  adminId: number | null = null;
  errorMessages: string[] = []; // Add this property to store error messages

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.adminForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^01[0-9]{9}$/), // Assuming phone numbers start with 01 and have 11 digits
        ]
      ],
      password: ['', [Validators.minLength(6)]],
    });
  }

  get f() {
    return this.adminForm.controls;
  }

  ngOnInit(): void {
    this.adminId = this.route.snapshot.params['id'];
    if (this.adminId) {
      this.api.getUser(this.adminId).subscribe((admin) => {
        this.adminForm.patchValue({
          name: admin.name,
          email: admin.email,
          phone: admin.phone,
        });
        // If updating, we don't need to validate the password again
        if (this.adminForm.get('password')) {
          this.adminForm.get('password')?.clearValidators();
          this.adminForm.get('password')?.updateValueAndValidity();
        }
      });
    }
  }

  onSubmit(): void {
    if (this.adminForm.valid) {
      const adminData = {
        ...this.adminForm.value,
        user_type: 'admin' // Assign 'admin' as the role
      };

      if (this.adminId) {
        this.api.updateUser(this.adminId, adminData).subscribe({
          next: () => this.router.navigate(['/admin/manage-users']),
          error: (error) => {
            console.error('Error updating admin', error);
            this.handleError(error);
          },
        });
      } else {
        this.api.addUser(adminData).subscribe({
          next: () => this.router.navigate(['/admin/manage-users']),
          error: (error) => {
            console.error('Error adding admin', error);
            this.handleError(error);
          },
        });
      }
    }
  }

  handleError(error: any): void {
    this.errorMessages = [];
    if (error.error.errors) {
      for (const key in error.error.errors) {
        if (error.error.errors.hasOwnProperty(key)) {
          this.errorMessages.push(...error.error.errors[key]);
        }
      }
    } else {
      this.errorMessages.push('An unexpected error occurred.');
    }
  }
}
