import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalreportComponent } from './arrivalreport.component';

describe('ArrivalreportComponent', () => {
  let component: ArrivalreportComponent;
  let fixture: ComponentFixture<ArrivalreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrivalreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivalreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
