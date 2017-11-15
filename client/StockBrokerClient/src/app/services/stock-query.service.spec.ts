import { TestBed, inject } from '@angular/core/testing';

import { StockQueryService } from './stock-query.service';

describe('StockQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockQueryService]
    });
  });

  it('should be created', inject([StockQueryService], (service: StockQueryService) => {
    expect(service).toBeTruthy();
  }));
});
