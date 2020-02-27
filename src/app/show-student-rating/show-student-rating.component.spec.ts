import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStudentRatingComponent } from './show-student-rating.component';

describe('ShowStudentRatingComponent', () => {
  let component: ShowStudentRatingComponent;
  let fixture: ComponentFixture<ShowStudentRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowStudentRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStudentRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
