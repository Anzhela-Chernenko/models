import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeFourthComponent } from './practice-fourth.component';

describe('PracticeFourthComponent', () => {
  let component: PracticeFourthComponent;
  let fixture: ComponentFixture<PracticeFourthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeFourthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
