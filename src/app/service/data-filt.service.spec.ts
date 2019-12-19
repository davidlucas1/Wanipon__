import { TestBed } from '@angular/core/testing';

import { DataFiltService } from './data-filt.service';

describe('DataFiltService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataFiltService = TestBed.get(DataFiltService);
    expect(service).toBeTruthy();
  });
});
