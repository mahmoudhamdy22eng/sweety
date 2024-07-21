import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-sorting',
  templateUrl: './product-sorting.component.html',
  styleUrls: ['./product-sorting.component.css'],
})
export class ProductSortingComponent implements OnInit {
  sortOptions: string[] = [];
  selectedSortOption: string = '';
  @Output() sortChange = new EventEmitter<string>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.sortOptions = this.productService.getSortOptions() ?? [];
  }

  onSortChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedSortOption = target.value;
    this.sortChange.emit(this.selectedSortOption);
  }
}
