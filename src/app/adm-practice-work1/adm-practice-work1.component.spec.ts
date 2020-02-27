import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPracticeWork1Component } from './adm-practice-work1.component';

describe('AdmPracticeWork1Component', () => {
  let component: AdmPracticeWork1Component;
  let fixture: ComponentFixture<AdmPracticeWork1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmPracticeWork1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPracticeWork1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
