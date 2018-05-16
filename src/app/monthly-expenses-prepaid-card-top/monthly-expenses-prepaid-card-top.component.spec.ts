import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyExpensesPrepaidCardTopComponent } from './monthly-expenses-prepaid-card-top.component';

describe('MonthlyExpensesPrepaidCardTopComponent', () => {
  let component: MonthlyExpensesPrepaidCardTopComponent;
  let fixture: ComponentFixture<MonthlyExpensesPrepaidCardTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyExpensesPrepaidCardTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyExpensesPrepaidCardTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
