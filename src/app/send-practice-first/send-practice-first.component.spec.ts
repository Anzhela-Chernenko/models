import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPracticeFirstComponent } from './send-practice-first.component';

describe('SendPracticeFirstComponent', () => {
  let component: SendPracticeFirstComponent;
  let fixture: ComponentFixture<SendPracticeFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendPracticeFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendPracticeFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
