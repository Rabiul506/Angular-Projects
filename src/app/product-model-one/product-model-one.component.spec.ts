import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModelOneComponent } from './product-model-one.component';

describe('ProductModelOneComponent', () => {
  let component: ProductModelOneComponent;
  let fixture: ComponentFixture<ProductModelOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductModelOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductModelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
