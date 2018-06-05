import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancerTransferComponent } from './balancer-transfer.component';

describe('BalancerTransferComponent', () => {
  let component: BalancerTransferComponent;
  let fixture: ComponentFixture<BalancerTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalancerTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancerTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
