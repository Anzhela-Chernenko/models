import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureFirstComponent } from './lecture-first.component';

describe('LectureFirstComponent', () => {
  let component: LectureFirstComponent;
  let fixture: ComponentFixture<LectureFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
