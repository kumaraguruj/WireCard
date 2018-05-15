import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesByCategroyTopComponent } from './expenses-by-categroy-top.component';

describe('ExpensesByCategroyTopComponent', () => {
  let component: ExpensesByCategroyTopComponent;
  let fixture: ComponentFixture<ExpensesByCategroyTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensesByCategroyTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesByCategroyTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
