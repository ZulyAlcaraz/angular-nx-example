import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { mockProvider } from '@ngneat/spectator/jest';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';

import { SpinnerStoreService } from '@angular-nx-example/spinner';

import { NotesEffects } from './notes.effects';
import { initialState } from './notes.reducer';

describe('NotesEffects', () => {
    const actions$: Observable<any> = new Observable();
    let effects: NotesEffects;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                NotesEffects,
                provideMockStore({ initialState }),
                provideMockActions(() => actions$),
                mockProvider(SpinnerStoreService)
            ]
        });

        effects = TestBed.get<NotesEffects>(NotesEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
