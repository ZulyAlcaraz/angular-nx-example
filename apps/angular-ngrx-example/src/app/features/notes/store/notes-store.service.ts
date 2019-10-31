import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromNotes from '.';
import { AddNote, DeleteNote, LoadNotes, EditNote, LoadNote } from './notes.actions';

@Injectable({ providedIn: 'root' })
export class NotesStoreService {
    constructor(private store: Store<fromNotes.NoteState>) {}

    loadNotes(): void {
        return this.store.dispatch(new LoadNotes());
    }

    getList(): Observable<fromNotes.Note[]> {
        return this.store.pipe(select(fromNotes.getListSelector));
    }

    loadNote(id: string): void {
        return this.store.dispatch(new LoadNote(id));
    }

    getNote(): Observable<fromNotes.Note> {
        return this.store.pipe(select(fromNotes.getNoteSelector));
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
