import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeWorkComponent } from './practice-work.component';

describe('PracticeWorkComponent', () => {
  let component: PracticeWorkComponent;
  let fixture: ComponentFixture<PracticeWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
