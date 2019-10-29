import { TestBed } from '@angular/core/testing';

import { NotesStoreService } from './notes-store.service';

describe('NotesStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotesStoreService = TestBed.get(NotesStoreService);
    expect(service).toBeTruthy();
  });
});
