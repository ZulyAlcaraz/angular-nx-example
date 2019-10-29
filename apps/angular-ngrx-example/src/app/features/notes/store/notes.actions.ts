import { Action } from '@ngrx/store';
import { Note } from './notes.reducer';

export enum NoteActionTypes {
    LoadNotes = '[Note] Load Notes',
    LoadNotesSuccess = '[Note] LoadNotesSuccess',
    LoadNotesFailure = '[Note] LoadNotesFailure',
    LoadNote = '[Note] Load Note',
    LoadNoteSuccess = '[Note] LoadNoteSuccess',
    LoadNoteFailure = '[Note] LoadNoteFailure',
    AddNote = '[Note] AddNote',
    DeleteNote = '[Note] DeleteNote',
    EditNote = '[Note] EditNote',
    GetNote = '[Note] GetNote',
}

export class LoadNotes implements Action {
    readonly type = NoteActionTypes.LoadNotes;
}

export class LoadNotesSuccess implements Action {
    readonly type = NoteActionTypes.LoadNotesSuccess;
    constructor(public payload: Note[]) {}
}

export class LoadNotesFailure implements Action {
    readonly type = NoteActionTypes.LoadNotesFailure;
}

export class LoadNote implements Action {
    readonly type = NoteActionTypes.LoadNote;
    constructor(public id: string) {}
}

export class LoadNoteSuccess implements Action {
    readonly type = NoteActionTypes.LoadNoteSuccess;
    constructor(public payload: Note) {}
}

export class LoadNoteFailure implements Action {
    readonly type = NoteActionTypes.LoadNoteFailure;
}

export class GetNote implements Action {
    readonly type = NoteActionTypes.GetNote;
    constructor(public id: string) {}
}

export class AddNote implements Action {
    readonly type = NoteActionTypes.AddNote;
    constructor(public payload: Note) {}
}

export class EditNote implements Action {
    readonly type = NoteActionTypes.EditNote;
    constructor(public payload: Note) {}
}

export class DeleteNote implements Action {
    readonly type = NoteActionTypes.DeleteNote;
    constructor(public id: string) {}
}

export type NoteActions = AddNote | DeleteNote | EditNote | GetNote | LoadNotes | LoadNotesSuccess | LoadNotesFailure | LoadNote | LoadNoteSuccess | LoadNoteFailure;
