import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsupplierComponent } from './formsupplier.component';

describe('FormsupplierComponent', () => {
  let component: FormsupplierComponent;
  let fixture: ComponentFixture<FormsupplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsupplierComponent]
    });
    fixture = TestBed.createComponent(FormsupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
