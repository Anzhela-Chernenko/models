import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPractice1Component } from './check-practice1.component';

describe('CheckPractice1Component', () => {
  let component: CheckPractice1Component;
  let fixture: ComponentFixture<CheckPractice1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckPractice1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPractice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
