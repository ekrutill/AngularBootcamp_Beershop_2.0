import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeSaleComponent } from './badge-sale.component';

describe('BadgeSaleComponent', () => {
  let component: BadgeSaleComponent;
  let fixture: ComponentFixture<BadgeSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
