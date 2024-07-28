import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDealsComponent } from './rental-deals.component';

describe('RentalDealsComponent', () => {
  let component: RentalDealsComponent;
  let fixture: ComponentFixture<RentalDealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentalDealsComponent]
    });
    fixture = TestBed.createComponent(RentalDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
