import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MatListModule, MatIconModule } from '@angular/material';

import { MainMenuComponent } from './main-menu.component';

describe('MainMenuComponent', () => {
    let spectator: Spectator<MainMenuComponent>;
    const createComponent = createComponentFactory({
        component: MainMenuComponent,
        imports: [
            MatListModule,
            MatIconModule,
            RouterTestingModule
        ]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
