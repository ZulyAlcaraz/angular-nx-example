import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromNotes from '.';
import { AddNote, DeleteNote, LoadNotes, EditNote } from './notes.actions';

@Injectable({ providedIn: 'root' })
export class NotesStoreService {
    constructor(private store: Store<fromNotes.State>) {}

    loadNotes(): void {
        return this.store.dispatch(new LoadNotes());
    }

    getList(): Observable<fromNotes.Note[]> {
        return this.store.pipe(select(fromNotes.getListSelector));
    }

    getNote(id: string): Observable<fromNotes.Note> {
        return this.store.pipe(select(fromNotes.getNoteSelector, id));
    }

    addNote(note: fromNotes.Note) {
        this.store.dispatch(new AddNote(note));
    }

    editNote(note: fromNotes.Note) {
        this.store.dispatch(new EditNote(note));
    }

    deleteNote(id: string) {
        this.store.dispatch(new DeleteNote(id));
    }
}
