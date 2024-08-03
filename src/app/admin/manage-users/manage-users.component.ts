import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  admins: any[] = [];
  customers: any[] = [];
  suppliers: any[] = [];
  currentSection: string = 'admins'; // Default to 'admins' section

  categories = [
    { name: 'Admins', route: 'admins' },
    { name: 'Customers', route: 'customers' },
    { name: 'Suppliers', route: 'suppliers' },
  ];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // Fetch all data on component initialization
    this.fetchData();
  }

  fetchData() {
    this.api.getUsers().subscribe({
      next: (data: any[]) => { // Ensure TypeScript understands this is an array
        this.admins = data.filter(user => user.user_type === 'admin');
        this.customers = data.filter(user => user.user_type === 'customer');
        this.suppliers = data.filter(user => user.user_type === 'supplier');
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }

  showSection(section: string) {
    // Change the current section
    this.currentSection = section;
  }

  toggleAdmin(adminId: number) {
    this.api.toggleUserStatus(adminId).subscribe({
      next: (response) => {
        const admin = this.admins.find(a => a.id === adminId);
        if (admin) {
          admin.is_deleted = response.user.is_deleted;
        }
      },
      error: (err) => {
        console.error('Error toggling admin status:', err);
      },
    });
  }

  toggleUser(userId: number) {
    this.api.toggleUserStatus(userId).subscribe({
      next: (response) => {
        const user = this.customers.find(u => u.id === userId);
        if (user) {
          user.is_deleted = response.user.is_deleted;
        }
      },
      error: (err) => {
        console.error('Error toggling user status:', err);
      },
    });
  }

  toggleSupplier(supplierId: number) {
    this.api.toggleUserStatus(supplierId).subscribe({
      next: (response) => {
        const supplier = this.suppliers.find(s => s.id === supplierId);
        if (supplier) {
          supplier.is_deleted = response.user.is_deleted;
        }
      },
      error: (err) => {
        console.error('Error toggling supplier status:', err);
      },
    });
  }
}
