import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfLimitComponent } from './self-limit.component';

describe('SelfLimitComponent', () => {
  let component: SelfLimitComponent;
  let fixture: ComponentFixture<SelfLimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfLimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
