import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromColor from './colors.reducer';

export const getColorStateState = createFeatureSelector<fromColor.ColorState>(
    'colors'
);

export const getListSelector = createSelector(
    getColorStateState,
    fromColor.getList
);
