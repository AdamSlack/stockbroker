import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSellerComponent } from './stock-seller.component';

describe('StockSellerComponent', () => {
  let component: StockSellerComponent;
  let fixture: ComponentFixture<StockSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
