import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopydocComponent } from './copydoc.component';

describe('CopydocComponent', () => {
  let component: CopydocComponent;
  let fixture: ComponentFixture<CopydocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopydocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopydocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
