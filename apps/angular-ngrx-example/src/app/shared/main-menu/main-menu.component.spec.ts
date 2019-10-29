import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { RouterTestingModule } from '@angular/router/testing';

import { MainMenuComponent } from './main-menu.component';
import { MaterialModule } from 'src/app/material.module';

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
