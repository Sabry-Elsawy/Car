import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCarDetailsComponent } from './home-car-details.component';

describe('HomeCarDetailsComponent', () => {
  let component: HomeCarDetailsComponent;
  let fixture: ComponentFixture<HomeCarDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCarDetailsComponent]
    });
    fixture = TestBed.createComponent(HomeCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
