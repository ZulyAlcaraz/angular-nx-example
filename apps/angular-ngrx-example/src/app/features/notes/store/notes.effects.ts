import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { NoteActionTypes, NoteActions } from './notes.actions';

@Injectable()
export class NotesEffects {


  @Effect()
  loadNotess$ = this.actions$.pipe(
    ofType(NoteActionTypes.LoadNotes),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<NoteActions>) {}

}
