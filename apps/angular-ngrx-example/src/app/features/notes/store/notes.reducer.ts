import { NoteActions, NoteActionTypes } from './notes.actions';

export const noteFeatureKey = 'note';

export interface Note {
    id?: string;
    title?: string;
    content?: string;
    color?: string;
}

export interface State {
    list: Note[];
    currentNote: Note;
    loading: boolean;
    error: boolean;
}

export const initialState: State = {
    list: [],
    currentNote: null,
    loading: false,
    error: false
};

export function reducer(state = initialState, action: NoteActions): State {
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

export const getList = (state: State) => state.list;
export const getNote =  (state: State) => state.currentNote;
