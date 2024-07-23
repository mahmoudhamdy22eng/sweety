import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandyBannerComponent } from './candy-banner.component';

describe('CandyBannerComponent', () => {
  let component: CandyBannerComponent;
  let fixture: ComponentFixture<CandyBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandyBannerComponent]
    });
    fixture = TestBed.createComponent(CandyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
