import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeProductOfTheWeekComponent } from './badge-product-of-the-week.component';

describe('BadgeProductOfTheWeekComponent', () => {
  let component: BadgeProductOfTheWeekComponent;
  let fixture: ComponentFixture<BadgeProductOfTheWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeProductOfTheWeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeProductOfTheWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
