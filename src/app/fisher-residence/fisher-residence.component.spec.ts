import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisherResidenceComponent } from './fisher-residence.component';

describe('FisherResidenceComponent', () => {
  let component: FisherResidenceComponent;
  let fixture: ComponentFixture<FisherResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FisherResidenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FisherResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
