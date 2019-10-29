import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as fromColors from '.';
import { LoadColors } from './colors.actions';

@Injectable({
    providedIn: 'root'
})
export class ColorsStoreService {
    constructor(private store: Store<fromColors.Colors>) {}

    getList(): Observable<string[]> {
        return this.store.pipe(select(fromColors.getListSelector));
    }

    loadColors(): void {
        return this.store.dispatch(new LoadColors());
    }
}
