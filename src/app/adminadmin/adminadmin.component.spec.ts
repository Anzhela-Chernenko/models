import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminadminComponent } from './adminadmin.component';

describe('AdminadminComponent', () => {
  let component: AdminadminComponent;
  let fixture: ComponentFixture<AdminadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
