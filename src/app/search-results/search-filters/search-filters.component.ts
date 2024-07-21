import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css'],
})
export class SearchFiltersComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<any>();
  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      category: [''],
      priceRange: [''],
    });
  }

  ngOnInit(): void {}

  applyFilters(): void {
    const filters = this.filterForm.value;
    filters.priceRange = filters.priceRange
      ? filters.priceRange.split(',').map(Number)
      : null;
    this.filtersChanged.emit(filters);
  }
}
