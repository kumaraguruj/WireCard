import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesWaiversComponent } from './fees-waivers.component';

describe('FeesWaiversComponent', () => {
  let component: FeesWaiversComponent;
  let fixture: ComponentFixture<FeesWaiversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesWaiversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesWaiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
