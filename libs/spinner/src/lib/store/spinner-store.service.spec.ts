import { TestBed } from '@angular/core/testing';

import { SpinnerStoreService } from './spinner-store.service';

describe('SpinnerStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpinnerStoreService = TestBed.get(SpinnerStoreService);
    expect(service).toBeTruthy();
  });
});
