import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellerComponent } from './bestseller.component';

describe('BestsellerComponent', () => {
  let component: BestsellerComponent;
  let fixture: ComponentFixture<BestsellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestsellerComponent]
    });
    fixture = TestBed.createComponent(BestsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
