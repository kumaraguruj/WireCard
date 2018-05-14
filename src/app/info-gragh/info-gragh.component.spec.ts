import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGraghComponent } from './info-gragh.component';

describe('InfoGraghComponent', () => {
  let component: InfoGraghComponent;
  let fixture: ComponentFixture<InfoGraghComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoGraghComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoGraghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
