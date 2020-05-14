import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginaldocComponent } from './originaldoc.component';

describe('OriginaldocComponent', () => {
  let component: OriginaldocComponent;
  let fixture: ComponentFixture<OriginaldocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginaldocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginaldocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
