import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSortingComponent } from './product-sorting.component';

describe('ProductSortingComponent', () => {
  let component: ProductSortingComponent;
  let fixture: ComponentFixture<ProductSortingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSortingComponent]
    });
    fixture = TestBed.createComponent(ProductSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
