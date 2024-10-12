import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawaLandingPageComponent } from './rawa-landing-page.component';

describe('RawaLandingPageComponent', () => {
  let component: RawaLandingPageComponent;
  let fixture: ComponentFixture<RawaLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RawaLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RawaLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
