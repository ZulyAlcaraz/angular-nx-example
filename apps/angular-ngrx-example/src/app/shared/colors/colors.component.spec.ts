import { MatListModule } from '@angular/material';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { ColorsComponent } from './colors.component';
import { ColorsStoreService } from './store/colors-store.service';

describe('ColorsComponent', () => {
    let spectator: Spectator<ColorsComponent>;
    
    const createComponent = createComponentFactory({
        component: ColorsComponent,
        mocks: [ColorsStoreService],
        imports: [MatListModule],
        detectChanges: false
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create', () => {

        expect(spectator.component).toBeTruthy();
    });
});
