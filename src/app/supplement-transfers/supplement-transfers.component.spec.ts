import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementTransfersComponent } from './supplement-transfers.component';

describe('SupplementTransfersComponent', () => {
  let component: SupplementTransfersComponent;
  let fixture: ComponentFixture<SupplementTransfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementTransfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
