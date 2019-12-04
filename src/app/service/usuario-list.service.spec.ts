import { TestBed } from '@angular/core/testing';

import { UsuarioListService } from './usuario-list.service';

describe('UsuarioListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioListService = TestBed.get(UsuarioListService);
    expect(service).toBeTruthy();
  });
});
