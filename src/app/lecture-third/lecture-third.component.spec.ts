import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureThirdComponent } from './lecture-third.component';

describe('LectureThirdComponent', () => {
  let component: LectureThirdComponent;
  let fixture: ComponentFixture<LectureThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
