import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementaryLimitComponent } from './supplementary-limit.component';

describe('SupplementaryLimitComponent', () => {
  let component: SupplementaryLimitComponent;
  let fixture: ComponentFixture<SupplementaryLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementaryLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementaryLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
