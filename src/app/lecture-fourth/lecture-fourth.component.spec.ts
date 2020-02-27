import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureFourthComponent } from './lecture-fourth.component';

describe('LectureFourthComponent', () => {
  let component: LectureFourthComponent;
  let fixture: ComponentFixture<LectureFourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LectureFourthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
