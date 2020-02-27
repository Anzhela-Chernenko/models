import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRatingPracticeFourthComponent } from './student-rating-practice-fourth.component';

describe('StudentRatingPracticeFourthComponent', () => {
  let component: StudentRatingPracticeFourthComponent;
  let fixture: ComponentFixture<StudentRatingPracticeFourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRatingPracticeFourthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRatingPracticeFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
