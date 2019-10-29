import { createServiceFactory } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';

import * as fromColors from '.';
import { ColorsStoreService } from './colors-store.service';

describe('ColorsStoreService', () => {
    const initialState = fromColors.initialState;
    const spectator = createServiceFactory<ColorsStoreService>({
        service: ColorsStoreService,
        providers: [provideMockStore({ initialState })]
    });

    it('should be created', () => {
        expect(spectator).toBeTruthy();
    });
});
