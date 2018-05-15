import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyAvergageBalanceTopComponent } from './monthly-avergage-balance-top.component';

describe('MonthlyAvergageBalanceTopComponent', () => {
  let component: MonthlyAvergageBalanceTopComponent;
  let fixture: ComponentFixture<MonthlyAvergageBalanceTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyAvergageBalanceTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyAvergageBalanceTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
