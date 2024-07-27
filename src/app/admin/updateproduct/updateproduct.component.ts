import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Product } from 'src/app/models/product.model';
import { SuccessmodalComponent } from '../successmodal/successmodal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent {

  product: Product = {
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
  productId!: number;

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

  updateProduct(): void {
    this.apiService.updateProduct(this.productId, this.product).subscribe(response => {
      console.log('Product updated', response);
      this.openSuccessModal();
    }, error => {
      console.error('Error updating product:', error);
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
