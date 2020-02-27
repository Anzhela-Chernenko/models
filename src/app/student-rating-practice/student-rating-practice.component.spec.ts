import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRatingPracticeComponent } from './student-rating-practice.component';

describe('StudentRatingPracticeComponent', () => {
  let component: StudentRatingPracticeComponent;
  let fixture: ComponentFixture<StudentRatingPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRatingPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRatingPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
