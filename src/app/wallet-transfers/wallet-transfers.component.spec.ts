import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletTransfersComponent } from './wallet-transfers.component';

describe('WalletTransfersComponent', () => {
  let component: WalletTransfersComponent;
  let fixture: ComponentFixture<WalletTransfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletTransfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
