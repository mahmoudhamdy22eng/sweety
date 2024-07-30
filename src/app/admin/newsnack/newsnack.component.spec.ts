import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsnackComponent } from './newsnack.component';

describe('NewsnackComponent', () => {
  let component: NewsnackComponent;
  let fixture: ComponentFixture<NewsnackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsnackComponent]
    });
    fixture = TestBed.createComponent(NewsnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
