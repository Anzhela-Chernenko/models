import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPFComponent } from './adm-p-f.component';

describe('AdmPFComponent', () => {
  let component: AdmPFComponent;
  let fixture: ComponentFixture<AdmPFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmPFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmPFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
