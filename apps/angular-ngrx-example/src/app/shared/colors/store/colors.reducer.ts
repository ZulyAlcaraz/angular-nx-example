import { ColorsActionTypes, ColorsActions } from './colors.actions';

export const colorsFeatureKey = 'colors';

export interface Colors {
    colors: string[];
    loading: boolean;
    error: boolean;
}

export const initialState: Colors = {
    colors: [],
    loading: false,
    error: false
};

export function reducer(state = initialState, action: ColorsActions): Colors {
    switch (action.type) {
        case ColorsActionTypes.LoadColors:
            return {
                ...state,
                loading: true
            };

        case ColorsActionTypes.LoadColorsSuccess:
            return {
                ...state,
                colors: [...action.payload],
                loading: false
            };

        case ColorsActionTypes.LoadColorsFailure:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
}

export const getList = (state: Colors) => state.colors;
