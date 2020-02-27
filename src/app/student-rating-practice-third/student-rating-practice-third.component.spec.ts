import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRatingPracticeThirdComponent } from './student-rating-practice-third.component';

describe('StudentRatingPracticeThirdComponent', () => {
  let component: StudentRatingPracticeThirdComponent;
  let fixture: ComponentFixture<StudentRatingPracticeThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRatingPracticeThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRatingPracticeThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
