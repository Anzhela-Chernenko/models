import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsLecFComponent } from './tests-lec-f.component';

describe('TestsLecFComponent', () => {
  let component: TestsLecFComponent;
  let fixture: ComponentFixture<TestsLecFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsLecFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsLecFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
