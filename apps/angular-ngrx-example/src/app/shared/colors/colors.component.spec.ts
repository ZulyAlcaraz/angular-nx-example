import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { of } from 'rxjs';

import { MaterialModule } from '@angular-nx-example/material';

import { ColorsComponent } from './colors.component';
import { ColorsStoreService } from './store/colors-store.service';

describe('ColorsComponent', () => {
    let spectator: Spectator<ColorsComponent>;
    const createComponent = createComponentFactory({
        component: ColorsComponent,
        mocks: [],
        providers: [
            {
                provide: ColorsStoreService,
                useValue: {
                    loadColors: () => {},
                    getList: () => of([])
                }
            }
        ],
        imports: [MaterialModule]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
