import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeFirstComponent } from './practice-first.component';

describe('PracticeFirstComponent', () => {
  let component: PracticeFirstComponent;
  let fixture: ComponentFixture<PracticeFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
