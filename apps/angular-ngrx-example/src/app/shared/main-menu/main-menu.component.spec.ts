import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { MaterialModule } from '@angular-nx-example/material';

import { MainMenuComponent } from './main-menu.component';

describe('MainMenuComponent', () => {
    let spectator: Spectator<MainMenuComponent>;
    const createComponent = createComponentFactory({
        component: MainMenuComponent,
        imports: [MaterialModule, RouterTestingModule]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
