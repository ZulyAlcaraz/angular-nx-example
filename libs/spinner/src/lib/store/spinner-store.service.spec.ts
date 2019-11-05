import { createServiceFactory } from '@ngneat/spectator/jest';
import { Store } from '@ngrx/store';

import { SpinnerStoreService } from './spinner-store.service';

describe('SpinnerStoreService', () => {
    const spectator = createServiceFactory<SpinnerStoreService>({
        service: SpinnerStoreService,
        mocks: [ Store ]
    });

    it('should be created', () => {
        expect(spectator).toBeTruthy();
    });
});
