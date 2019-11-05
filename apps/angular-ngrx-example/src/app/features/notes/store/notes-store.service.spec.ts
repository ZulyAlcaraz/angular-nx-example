import { createServiceFactory } from '@ngneat/spectator/jest';
import { Store } from '@ngrx/store';

import { NotesStoreService } from './notes-store.service';

describe('NotesStoreService', () => {
    const spectator = createServiceFactory<NotesStoreService>({
        service: NotesStoreService,
        mocks: [ Store ]
    });

    it('should be created', () => {
        expect(spectator).toBeTruthy();
    });
});
