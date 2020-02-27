import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureSecondComponent } from './lecture-second.component';

describe('LectureSecondComponent', () => {
  let component: LectureSecondComponent;
  let fixture: ComponentFixture<LectureSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
