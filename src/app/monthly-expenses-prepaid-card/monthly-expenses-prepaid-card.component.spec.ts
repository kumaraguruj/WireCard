import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyExpensesPrepaidCardComponent } from './monthly-expenses-prepaid-card.component';

describe('MonthlyExpensesPrepaidCardComponent', () => {
  let component: MonthlyExpensesPrepaidCardComponent;
  let fixture: ComponentFixture<MonthlyExpensesPrepaidCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyExpensesPrepaidCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyExpensesPrepaidCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
