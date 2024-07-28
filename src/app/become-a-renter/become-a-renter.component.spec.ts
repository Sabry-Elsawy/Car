import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeARenterComponent } from './become-a-renter.component';

describe('BecomeARenterComponent', () => {
  let component: BecomeARenterComponent;
  let fixture: ComponentFixture<BecomeARenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeARenterComponent]
    });
    fixture = TestBed.createComponent(BecomeARenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
