import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedProductsComponent } from './related-products.component';

describe('RelatedProductsComponent', () => {
  let component: RelatedProductsComponent;
  let fixture: ComponentFixture<RelatedProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatedProductsComponent]
    });
    fixture = TestBed.createComponent(RelatedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
