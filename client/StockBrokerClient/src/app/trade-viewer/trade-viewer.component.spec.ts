import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeViewerComponent } from './trade-viewer.component';

describe('TradeViewerComponent', () => {
  let component: TradeViewerComponent;
  let fixture: ComponentFixture<TradeViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
