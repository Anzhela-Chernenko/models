import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRatingPracticeSecondComponent } from './student-rating-practice-second.component';

describe('StudentRatingPracticeSecondComponent', () => {
  let component: StudentRatingPracticeSecondComponent;
  let fixture: ComponentFixture<StudentRatingPracticeSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRatingPracticeSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRatingPracticeSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
