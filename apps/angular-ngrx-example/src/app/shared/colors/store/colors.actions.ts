import { Action } from '@ngrx/store';

export enum ColorsActionTypes {
    LoadColors = '[Colors] Load Colors',
    LoadColorsSuccess = '[Colors] Load Colors Success',
    LoadColorsFailure = '[Colors] Load Colors Failure'
}

export class LoadColors implements Action {
    readonly type = ColorsActionTypes.LoadColors;
}

export class LoadColorsSuccess implements Action {
    readonly type = ColorsActionTypes.LoadColorsSuccess;

    constructor(public payload: string[]) {}
}

export class LoadColorsFailure implements Action {
    readonly type = ColorsActionTypes.LoadColorsFailure;
}

export type ColorsActions = LoadColors | LoadColorsSuccess | LoadColorsFailure;
