import { ColorsActionTypes, ColorsActions } from './colors.actions';

export const colorsFeatureKey = 'colors';

export interface ColorState {
    colors: string[];
    loading: boolean;
    error: boolean;
}

export const initialState: ColorState = {
    colors: [],
    loading: false,
    error: false
};

export function reducer(state = initialState, action: ColorsActions): ColorState {
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

export const getList = (state: ColorState) => state.colors;
