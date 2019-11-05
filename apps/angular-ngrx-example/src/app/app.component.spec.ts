import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockComponent } from 'ng-mocks';

import { SpinnerComponent } from '@angular-nx-example/spinner';

import { AppComponent } from './app.component';


describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;
    const createComponent = createComponentFactory({
        component: AppComponent,
        imports: [
            RouterTestingModule,
            HttpClientTestingModule
        ],
        declarations: [MockComponent(SpinnerComponent)]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create the app', () => {
        expect(spectator.component).toBeTruthy();
    });
});
