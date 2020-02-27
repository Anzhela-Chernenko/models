import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmTestsComponent } from './adm-tests.component';

describe('AdmTestsComponent', () => {
  let component: AdmTestsComponent;
  let fixture: ComponentFixture<AdmTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
