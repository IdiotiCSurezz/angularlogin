import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeStatusComponent } from './be-status.component';

describe('BeStatusComponent', () => {
  let component: BeStatusComponent;
  let fixture: ComponentFixture<BeStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
