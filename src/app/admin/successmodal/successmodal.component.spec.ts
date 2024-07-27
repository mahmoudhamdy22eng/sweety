import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessmodalComponent } from './successmodal.component';

describe('SuccessmodalComponent', () => {
  let component: SuccessmodalComponent;
  let fixture: ComponentFixture<SuccessmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessmodalComponent]
    });
    fixture = TestBed.createComponent(SuccessmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
