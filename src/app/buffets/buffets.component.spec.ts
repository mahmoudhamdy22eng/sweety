import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffetsComponent } from './buffets.component';

describe('BuffetsComponent', () => {
  let component: BuffetsComponent;
  let fixture: ComponentFixture<BuffetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuffetsComponent]
    });
    fixture = TestBed.createComponent(BuffetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
