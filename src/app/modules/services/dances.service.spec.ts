import { TestBed } from '@angular/core/testing';

import { DancesService } from './dances.service';

describe('DancesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DancesService = TestBed.get(DancesService);
    expect(service).toBeTruthy();
  });
});
