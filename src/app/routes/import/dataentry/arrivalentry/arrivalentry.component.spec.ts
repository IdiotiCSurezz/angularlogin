import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalentryComponent } from './arrivalentry.component';

describe('ArrivalentryComponent', () => {
  let component: ArrivalentryComponent;
  let fixture: ComponentFixture<ArrivalentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrivalentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivalentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
