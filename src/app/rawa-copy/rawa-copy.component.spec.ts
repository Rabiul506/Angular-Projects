import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawaCopyComponent } from './rawa-copy.component';

describe('RawaCopyComponent', () => {
  let component: RawaCopyComponent;
  let fixture: ComponentFixture<RawaCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RawaCopyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RawaCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
