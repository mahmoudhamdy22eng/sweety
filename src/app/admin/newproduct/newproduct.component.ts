import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/models/product.model';
import { SuccessmodalComponent } from '../successmodal/successmodal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent {

  product: Product = {
    // id: 0,
    name: '',
    description: '',
    price: 0,
    QuantityAvailable: 0,
    CategoryID: '',
    AdminID: '',
    IsCustomizable: false,
    HasNutritionalInfo: false,
    image: '',
    vendor: '',
    is_deleted: false
  };

  constructor(private apiService: ApiService, private router: Router, private dialog: MatDialog ) {}

  addProduct() {
    this.apiService.addProduct(this.product)
      .subscribe(response => {
        console.log('Product added', response);
        this.openSuccessModal();
      }, error => {
        console.error('Error adding product', error);
      });
  }

  openSuccessModal(): void {
    const dialogRef = this.dialog.open(SuccessmodalComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/admin']);
    });
  }
}
