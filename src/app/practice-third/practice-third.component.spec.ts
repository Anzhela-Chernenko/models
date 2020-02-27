import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeThirdComponent } from './practice-third.component';

describe('PracticeThirdComponent', () => {
  let component: PracticeThirdComponent;
  let fixture: ComponentFixture<PracticeThirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeThirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
