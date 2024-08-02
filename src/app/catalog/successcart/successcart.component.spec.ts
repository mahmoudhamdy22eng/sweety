import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesscartComponent } from './successcart.component';

describe('SuccesscartComponent', () => {
  let component: SuccesscartComponent;
  let fixture: ComponentFixture<SuccesscartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccesscartComponent]
    });
    fixture = TestBed.createComponent(SuccesscartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
