import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormadminComponent } from './formadmin.component';

describe('FormadminComponent', () => {
  let component: FormadminComponent;
  let fixture: ComponentFixture<FormadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormadminComponent]
    });
    fixture = TestBed.createComponent(FormadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
