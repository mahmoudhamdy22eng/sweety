import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsContentComponent } from './terms-content.component';

describe('TermsContentComponent', () => {
  let component: TermsContentComponent;
  let fixture: ComponentFixture<TermsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsContentComponent]
    });
    fixture = TestBed.createComponent(TermsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
