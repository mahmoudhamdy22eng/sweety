import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsweetComponent } from './newsweet.component';

describe('NewsweetComponent', () => {
  let component: NewsweetComponent;
  let fixture: ComponentFixture<NewsweetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsweetComponent]
    });
    fixture = TestBed.createComponent(NewsweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
