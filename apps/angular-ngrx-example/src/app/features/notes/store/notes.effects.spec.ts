import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NotesEffects } from './notes.effects';

describe('NotesEffects', () => {
  const actions$: Observable<any> = new Observable();
  let effects: NotesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NotesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<NotesEffects>(NotesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
