import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendFileFromStudentComponent } from './send-file-from-student.component';

describe('SendFileFromStudentComponent', () => {
  let component: SendFileFromStudentComponent;
  let fixture: ComponentFixture<SendFileFromStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendFileFromStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendFileFromStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
