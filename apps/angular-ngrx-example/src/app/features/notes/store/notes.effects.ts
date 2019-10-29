import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '@angular-nx-example/api-interfaces';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { map, catchError, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { NoteActionTypes, NoteActions, LoadNotesSuccess, LoadNotesFailure, LoadNoteSuccess, LoadNoteFailure } from './notes.actions';

@Injectable()
export class NotesEffects {

    @Effect()
    loadNotess$ = this.actions$.pipe(
        ofType(NoteActionTypes.LoadNotes),
        switchMap(() => this.getNotes()),
    );

    @Effect()
    loadNote$ = this.actions$.pipe(
        ofType(NoteActionTypes.LoadNote),
        switchMap((action) => this.getNote(action.id)),
    );

    constructor(
        private actions$: Actions<NoteActions>,
        private http: HttpClient
    ) {}

    getNotes(): Observable<Action> {
        return this.http
            .get<Note[]>('/api/notes')
            .pipe(
                map(notes => new LoadNotesSuccess(notes)),
                catchError(err => of(new LoadNotesFailure()))
            );
    }

    getNote(id: string): Observable<Action> {
        return this.http
            .get<Note>(`/api/notes/${id}`)
            .pipe(
                map(note => new LoadNoteSuccess(note)),
                catchError(err => of(new LoadNoteFailure()))
            );
    }
}
