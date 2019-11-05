import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MatProgressSpinnerModule } from '@angular/material';

import { SpinnerComponent } from './spinner.component';
import { SpinnerStoreService } from '../store/spinner-store.service';

describe('SpinnerComponent', () => {
    let spectator: Spectator<SpinnerComponent>;
    const createComponent = createComponentFactory({
        component: SpinnerComponent,
        mocks: [SpinnerStoreService],
        imports: [
            MatProgressSpinnerModule
        ]
    });

    beforeEach(() => (spectator = createComponent()));
  
    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
