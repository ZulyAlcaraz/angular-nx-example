import { NoteActions, NoteActionTypes } from './notes.actions';

export const noteFeatureKey = 'note';

export interface Note {
    id: string;
    title: string;
    content: string;
    color: string;
}

export interface State {
    list: Note[];
    loading: boolean;
    error: boolean;
}

export const initialState: State = {
    list: [],
    loading: false,
    error: false
};

export function reducer(state = initialState, action: NoteActions): State {
    switch (action.type) {
        case NoteActionTypes.AddNote:
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        case NoteActionTypes.DeleteNote:
            return {
                ...state,
                list: [...state.list.filter(i => i.id !== action.id)]
            };
        case NoteActionTypes.EditNote:
            return {
                ...state,
                list: [
                    ...state.list.map(i => {
                        if (i.id === action.payload.id) {
                            return action.payload;
                        }
                        return i;
                    })
                ]
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
                error: true
            };
        default:
            return state;
    }
}

export const getList = (state: State) => state.list;
export const getNote =  (state: State, id: string) => state.list.filter(i => i.id === id)[0];
