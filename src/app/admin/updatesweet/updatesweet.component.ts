import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/models/product.model';
import { SuccessmodalComponent } from '../successmodal/successmodal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-updatesweet',
  templateUrl: './updatesweet.component.html',
  styleUrls: ['./updatesweet.component.css']
})
export class UpdatesweetComponent implements OnInit {

  product: Product = {
    name: '',
    description: '',
    price: 0,
    QuantityAvailable: 0,
    CategoryID: '1',
    AdminID: '1',
    IsCustomizable: false,
    HasNutritionalInfo: false,
    image: '',
    vendor: '',
    is_deleted: false
  };
  productId!: number;
  selectedFile: File | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService, 
              private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.apiService.getProductById(this.productId).subscribe(data => {
      this.product = data;
    }, error => {
      console.error('Error fetching product:', error);
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  updateSweet(): void {
    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('description', this.product.description);
    formData.append('price', this.product.price.toString());
    formData.append('QuantityAvailable', this.product.QuantityAvailable.toString());
    formData.append('CategoryID', this.product.CategoryID);
    formData.append('AdminID', this.product.AdminID);
    formData.append('IsCustomizable', this.product.IsCustomizable ? '1' : '0');
    formData.append('HasNutritionalInfo', this.product.HasNutritionalInfo ? '1' : '0');
    formData.append('vendor', this.product.vendor);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    } else {
      // Append an empty value if there's no new file selected
      formData.append('image', this.product.image);
    }

    this.apiService.updateSweet(this.productId, formData).subscribe(response => {
      console.log('Product updated', response);
      this.openSuccessModal();
    }, error => {
      console.error('Error updating product:', error);
      if (error.status === 422) {
        console.error('Validation Errors:', error.error.errors);
      }
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
