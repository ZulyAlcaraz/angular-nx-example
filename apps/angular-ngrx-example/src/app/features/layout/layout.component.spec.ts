import { RouterTestingModule } from '@angular/router/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MatToolbarModule, MatSidenavModule } from '@angular/material';

import { LayoutComponent } from './layout.component';
import { MainMenuModule } from '../../shared/main-menu/main-menu.module';

describe('LayoutComponent', () => {
    let spectator: Spectator<LayoutComponent>;
    const createComponent = createComponentFactory({
        component: LayoutComponent,
        imports: [
            RouterTestingModule,
            MatToolbarModule,
            MatSidenavModule,
            MainMenuModule
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
