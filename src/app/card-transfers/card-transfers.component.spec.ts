import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTransfersComponent } from './card-transfers.component';

describe('CardTransfersComponent', () => {
  let component: CardTransfersComponent;
  let fixture: ComponentFixture<CardTransfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTransfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
