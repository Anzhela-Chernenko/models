import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPracticeComponent } from './adm-practice.component';

describe('AdmPracticeComponent', () => {
  let component: AdmPracticeComponent;
  let fixture: ComponentFixture<AdmPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
