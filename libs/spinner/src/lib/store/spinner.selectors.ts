import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SPINNER_FEATURE_KEY, SpinnerState, getLoading } from './spinner.reducer';

// Lookup the 'Spinner' feature state managed by NgRx
const getSpinnerState = createFeatureSelector<SpinnerState>(
    SPINNER_FEATURE_KEY
);

const getSpinnerValue = createSelector(
    getSpinnerState,
    getLoading
);

export const spinnerQuery = {
    getSpinnerValue,
};
