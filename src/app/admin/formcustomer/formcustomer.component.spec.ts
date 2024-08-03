import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcustomerComponent } from './formcustomer.component';

describe('FormcustomerComponent', () => {
  let component: FormcustomerComponent;
  let fixture: ComponentFixture<FormcustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormcustomerComponent]
    });
    fixture = TestBed.createComponent(FormcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
