import { NoteActions, NoteActionTypes } from './notes.actions';
import { Note as NoteApi } from '@angular-nx-example/api-interfaces';

export const noteFeatureKey = 'note';

export interface Note extends NoteApi {
}

export interface NoteState {
    list: Note[];
    currentNote: Note;
    loading: boolean;
    error: boolean;
}

export const initialState: NoteState = {
    list: [],
    currentNote: null,
    loading: false,
    error: false
};

export function reducer(state = initialState, action: NoteActions): NoteState {
    switch (action.type) {
        case NoteActionTypes.AddNote:
            return {
                ...state,
                loading: true
            };
        case NoteActionTypes.AddNoteSuccess:
            return {
                ...state,
                list: [...state.list, action.payload],
                loading: false
            };
        case NoteActionTypes.AddNoteFailure:
            return {
                ...state,
                loading: false,
                error: true
            };
        case NoteActionTypes.EditNote:
            return {
                ...state,
                loading: true
            };
        case NoteActionTypes.EditNoteSuccess:
            return {
                ...state,
                list: [
                    ...state.list.map(i => {
                        if (i.id === action.payload.id) {
                            return action.payload;
                        }
                        return i;
                    })
                ],
                loading: false
            };
        case NoteActionTypes.EditNoteFailure:
            return {
                ...state,
                loading: false,
                error: true
            };
        case NoteActionTypes.DeleteNote:
            return {
                ...state,
                loading: true
            };
        case NoteActionTypes.DeleteNoteSuccess:
            return {
                ...state,
                list: [...state.list.filter(i => i.id !== action.payload.id)],
                loading: false
            };
        case NoteActionTypes.DeleteNoteFailure:
            return {
                ...state,
                loading: false,
                error: true
            };
        case NoteActionTypes.LoadNotes:
            return {
                ...state,
                loading: true
            };
        case NoteActionTypes.LoadNotesSuccess:
            return {
                ...state,
                list: [...action.payload],
                loading: false
            };
        case NoteActionTypes.LoadNotesFailure:
            return {
                ...state,
                loading: false,
                error: true
            };
        case NoteActionTypes.LoadNote:
            return {
                ...state,
                loading: true
            };
        case NoteActionTypes.LoadNoteSuccess:
            return {
                ...state,
                currentNote: {...action.payload},
                loading: false
            };
        case NoteActionTypes.LoadNoteFailure:
            return {
                ...state,
                loading: false,
                error: true
            };
        default:
            return state;
    }
}

export const getList = (state: NoteState) => state.list;
export const getNote =  (state: NoteState) => state.currentNote;
