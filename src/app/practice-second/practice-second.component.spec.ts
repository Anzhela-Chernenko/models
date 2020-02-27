import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeSecondComponent } from './practice-second.component';

describe('PracticeSecondComponent', () => {
  let component: PracticeSecondComponent;
  let fixture: ComponentFixture<PracticeSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
