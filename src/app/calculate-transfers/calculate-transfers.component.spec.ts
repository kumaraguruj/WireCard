import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateTransfersComponent } from './calculate-transfers.component';

describe('CalculateTransfersComponent', () => {
  let component: CalculateTransfersComponent;
  let fixture: ComponentFixture<CalculateTransfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateTransfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
