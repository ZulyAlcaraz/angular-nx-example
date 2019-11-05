import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { SpinnerState } from './spinner.reducer';
import { ShowSpinner, HideSpinner } from './spinner.actions';
import { spinnerQuery } from './spinner.selectors';

@Injectable({
    providedIn: 'root'
})
export class SpinnerStoreService {

    constructor(private store: Store<SpinnerState>) { }

    showSpinner(): void {
        this.store.dispatch(new ShowSpinner());
    }

    hideSpinner(): void {
        this.store.dispatch(new HideSpinner());
    }

    getSpinnerValue(): Observable<boolean> {
        return this.store.pipe(select(spinnerQuery.getSpinnerValue));
    }
}
