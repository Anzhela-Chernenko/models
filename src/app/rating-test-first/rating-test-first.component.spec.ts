import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingTestFirstComponent } from './rating-test-first.component';

describe('RatingTestFirstComponent', () => {
  let component: RatingTestFirstComponent;
  let fixture: ComponentFixture<RatingTestFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingTestFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingTestFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
