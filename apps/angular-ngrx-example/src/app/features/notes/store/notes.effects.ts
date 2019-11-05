import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, catchError, switchMap, tap, finalize, delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Note } from '@angular-nx-example/api-interfaces';
import { SpinnerStoreService } from '@angular-nx-example/spinner';

import { NoteActionTypes, NoteActions, LoadNotesSuccess, LoadNotesFailure,
    LoadNoteSuccess, LoadNoteFailure, AddNoteSuccess, AddNoteFailure,
    EditNoteSuccess, EditNoteFailure, DeleteNoteSuccess, DeleteNoteFailure
} from './notes.actions';


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
        private http: HttpClient,
        private readonly spinnerStore: SpinnerStoreService
    ) {}

    getNotes(): Observable<Action> {
        return this.http
            .get<Note[]>('/api/notes')
            .pipe(
                tap(() => this.spinnerStore.showSpinner()),
                map(response => new LoadNotesSuccess(response)),
                catchError(err => of(new LoadNotesFailure())),
                delay(1000),
                finalize(() => this.spinnerStore.hideSpinner())
            );
    }

    getNote(id: string): Observable<Action> {
        return this.http
            .get<Note>(`/api/notes/${id}`)
            .pipe(
                tap(() => this.spinnerStore.showSpinner()),
                map(response => new LoadNoteSuccess(response)),
                catchError(err => of(new LoadNoteFailure())),
                delay(1000),
                finalize(() => this.spinnerStore.hideSpinner())
            );
    }

    addNote(note: Note): Observable<Action> {
        return this.http
            .post<Note>(`/api/notes`, note)
            .pipe(
                tap(() => this.spinnerStore.showSpinner()),
                map(response => new AddNoteSuccess(response)),
                catchError(err => of(new AddNoteFailure())),
                delay(1000),
                finalize(() => this.spinnerStore.hideSpinner())
            );
    }

    editNote(id: string, note: Note): Observable<Action> {
        return this.http
            .patch<Note>(`/api/notes/${id}`, note)
            .pipe(
                tap(() => this.spinnerStore.showSpinner()),
                map(response => new EditNoteSuccess(response)),
                catchError(err => of(new EditNoteFailure())),
                delay(1000),
                finalize(() => this.spinnerStore.hideSpinner())
            );
    }

    deleteNote(id: string): Observable<Action> {
        return this.http
            .delete<Note>(`/api/notes/${id}`)
            .pipe(
                tap(() => this.spinnerStore.showSpinner()),
                map(response => new DeleteNoteSuccess(response)),
                catchError(err => of(new DeleteNoteFailure())),
                delay(1000),
                finalize(() => this.spinnerStore.hideSpinner())
            );
    }
}
