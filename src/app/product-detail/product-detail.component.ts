import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any;
  relatedProducts: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const productIdParam = this.route.snapshot.paramMap.get('id');
    const productId = productIdParam ? +productIdParam : null;

    if (productId !== null) {
      this.productService.getProductById(productId).subscribe((product) => {
        this.product = product;
      });
      this.productService
        .getRelatedProducts(productId)
        .subscribe((relatedProducts) => {
          this.relatedProducts = relatedProducts;
        });
    }
  }
}
