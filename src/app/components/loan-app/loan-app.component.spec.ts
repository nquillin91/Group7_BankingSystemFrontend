import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAppComponent } from './loan-app.component';

describe('LoanAppComponent', () => {
  let component: LoanAppComponent;
  let fixture: ComponentFixture<LoanAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
