import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStudentRating2Component } from './show-student-rating2.component';

describe('ShowStudentRating2Component', () => {
  let component: ShowStudentRating2Component;
  let fixture: ComponentFixture<ShowStudentRating2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowStudentRating2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStudentRating2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
