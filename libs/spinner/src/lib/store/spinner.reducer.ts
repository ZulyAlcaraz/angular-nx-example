import { SpinnerAction, SpinnerActionTypes } from './spinner.actions';

export const SPINNER_FEATURE_KEY = 'spinner';

/**
 * Interface for the 'Spinner' data used in
 *  - SpinnerState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface SpinnerState {
    show: boolean;
}

export interface SpinnerPartialState {
    readonly [SPINNER_FEATURE_KEY]: SpinnerState;
}

export const initialState: SpinnerState = {
    show: false
};

export function reducer(state: SpinnerState = initialState, action: SpinnerAction): SpinnerState {
    switch (action.type) {
        case SpinnerActionTypes.ShowSpinner:
            return {
                ...state,
                show: true
            };
        case SpinnerActionTypes.HideSpinner:
            return {
                ...state,
                show: false
            };
        default:
            return state;
    }
}

export const getLoading = (state: SpinnerState) => state.show;

