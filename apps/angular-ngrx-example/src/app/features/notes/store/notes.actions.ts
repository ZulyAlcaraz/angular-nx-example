import { Action } from '@ngrx/store';
import { Note } from './notes.reducer';

export enum NoteActionTypes {
    LoadNotes = '[Note] Load Notes',
    LoadNotesSuccess = '[Note] LoadNotesSuccess',
    LoadNotesFailure = '[Note] LoadNotesFailure',
    LoadNote = '[Note] Load Note',
    LoadNoteSuccess = '[Note] LoadNoteSuccess',
    LoadNoteFailure = '[Note] LoadNoteFailure',
    GetNote = '[Note] GetNote',
    AddNote = '[Note] AddNote',
    AddNoteSuccess = '[Note] AddNoteSuccess',
    AddNoteFailure = '[Note] AddNoteFailure',
    EditNote = '[Note] EditNote',
    EditNoteSuccess = '[Note] EditNoteSuccess',
    EditNoteFailure = '[Note] EditNoteFailure',
    DeleteNote = '[Note] DeleteNote',
    DeleteNoteSuccess = '[Note] DeleteNoteSuccess',
    DeleteNoteFailure = '[Note] DeleteNoteFailure',
}

// load notes actions
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


// load one note actions
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


// add note actions
export class AddNote implements Action {
    readonly type = NoteActionTypes.AddNote;
    constructor(public payload: Note) {}
}

export class AddNoteSuccess implements Action {
    readonly type = NoteActionTypes.AddNoteSuccess;
    constructor(public payload: Note) {}
}

export class AddNoteFailure implements Action {
    readonly type = NoteActionTypes.AddNoteFailure;
}


// edit note actions
export class EditNote implements Action {
    readonly type = NoteActionTypes.EditNote;
    constructor(public payload: Note) {}
}

export class EditNoteSuccess implements Action {
    readonly type = NoteActionTypes.EditNoteSuccess;
    constructor(public payload: Note) {}
}

export class EditNoteFailure implements Action {
    readonly type = NoteActionTypes.EditNoteFailure;
}

// delete note actions
export class DeleteNote implements Action {
    readonly type = NoteActionTypes.DeleteNote;
    constructor(public id: string) {}
}

export class DeleteNoteSuccess implements Action {
    readonly type = NoteActionTypes.DeleteNoteSuccess;
    constructor(public payload: Note) {}
}

export class DeleteNoteFailure implements Action {
    readonly type = NoteActionTypes.DeleteNoteFailure;
}

export type NoteActions = LoadNotes | LoadNotesSuccess | LoadNotesFailure |
    LoadNote | LoadNoteSuccess | LoadNoteFailure | GetNote |
    AddNote | AddNoteSuccess | AddNoteFailure |
    EditNote | EditNoteSuccess | EditNoteFailure |
    DeleteNote | DeleteNoteSuccess | DeleteNoteFailure;
