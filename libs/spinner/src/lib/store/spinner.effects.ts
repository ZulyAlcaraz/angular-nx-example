import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import { SpinnerActionTypes, SpinnerAction } from './spinner.actions';

@Injectable()
export class SpinnerEffects {

    @Effect()
    showSpinner$ = this.actions$.pipe(
        ofType(SpinnerActionTypes.ShowSpinner),
        tap(() =>  console.log('Effect show')),
        concatMap(() => EMPTY)
    );

    @Effect()
    hideSpinner$ = this.actions$.pipe(
        ofType(SpinnerActionTypes.HideSpinner),
        concatMap(() => EMPTY)
    );

    constructor(private actions$: Actions<SpinnerAction>) {}
}
