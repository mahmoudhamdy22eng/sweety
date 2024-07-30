import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/models/product.model';
import { SuccessmodalComponent } from '../successmodal/successmodal.component';

@Component({
  selector: 'app-newsweet',
  templateUrl: './newsweet.component.html',
  styleUrls: ['./newsweet.component.css']
})
export class NewsweetComponent {

  product: Product = {
    // id: 0,
    name: '',
    description: '',
    price: 0,
    QuantityAvailable: 0,
    CategoryID: "1",
    AdminID: '1',
    IsCustomizable: false,
    HasNutritionalInfo: false,
    image: '',
    vendor: '',
    is_deleted: false
  };

  selectedFile: File | null = null;

  constructor(private apiService: ApiService, private router: Router, private dialog: MatDialog ) {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  addProduct() {
    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('description', this.product.description);
    formData.append('price', this.product.price.toString());
    formData.append('QuantityAvailable', this.product.QuantityAvailable.toString());
    formData.append('CategoryID', this.product.CategoryID);
    formData.append('AdminID', this.product.AdminID);
    formData.append('IsCustomizable', this.product.IsCustomizable ? '1' : '0');
    formData.append('HasNutritionalInfo', this.product.HasNutritionalInfo ? '1' : '0');
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }
    formData.append('vendor', this.product.vendor);

    this.apiService.addSweet(formData)
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
