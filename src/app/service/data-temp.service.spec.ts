import { TestBed } from '@angular/core/testing';

import { DataTempService } from './data-temp.service';

describe('DataTempService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataTempService = TestBed.get(DataTempService);
    expect(service).toBeTruthy();
  });
});
