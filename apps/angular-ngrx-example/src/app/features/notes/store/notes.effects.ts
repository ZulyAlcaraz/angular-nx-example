import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '@angular-nx-example/api-interfaces';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { map, catchError, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { NoteActionTypes, NoteActions, LoadNotesSuccess, LoadNotesFailure, LoadNoteSuccess, LoadNoteFailure, AddNoteSuccess, AddNoteFailure, EditNoteSuccess, EditNoteFailure, DeleteNoteSuccess, DeleteNoteFailure } from './notes.actions';

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

    @Effect()
    addNote$ = this.actions$.pipe(
        ofType(NoteActionTypes.AddNote),
        switchMap((action) => this.addNote(action.payload)),
    );

    @Effect()
    editNote$ = this.actions$.pipe(
        ofType(NoteActionTypes.EditNote),
        switchMap((action) => this.editNote(action.payload.id, action.payload)),
    );

    @Effect()
    deleteNote$ = this.actions$.pipe(
        ofType(NoteActionTypes.DeleteNote),
        switchMap((action) => this.deleteNote(action.id)),
    );

    constructor(
        private actions$: Actions<NoteActions>,
        private http: HttpClient
    ) {}

    getNotes(): Observable<Action> {
        return this.http
            .get<Note[]>('/api/notes')
            .pipe(
                map(response => new LoadNotesSuccess(response)),
                catchError(err => of(new LoadNotesFailure()))
            );
    }

    getNote(id: string): Observable<Action> {
        return this.http
            .get<Note>(`/api/notes/${id}`)
            .pipe(
                map(response => new LoadNoteSuccess(response)),
                catchError(err => of(new LoadNoteFailure()))
            );
    }

    addNote(note: Note): Observable<Action> {
        return this.http
            .post<Note>(`/api/notes`, note)
            .pipe(
                map(response => new AddNoteSuccess(response)),
                catchError(err => of(new AddNoteFailure()))
            );
    }

    editNote(id: string, note: Note): Observable<Action> {
        return this.http
            .patch<Note>(`/api/notes/${id}`, note)
            .pipe(
                map(response => new EditNoteSuccess(response)),
                catchError(err => of(new EditNoteFailure()))
            );
    }

    deleteNote(id: string): Observable<Action> {
        return this.http
            .delete<Note>(`/api/notes/${id}`)
            .pipe(
                map(response => new DeleteNoteSuccess(response)),
                catchError(err => of(new DeleteNoteFailure()))
            );
    }
}
