import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule, MatListModule, MatIconModule, MatButtonModule } from '@angular/material';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { provideMockStore } from '@ngrx/store/testing';

import { ListComponent } from './list.component';
import { initialState } from '../store/notes.reducer';

describe('ListComponent', () => {
    let spectator: Spectator<ListComponent>;
    const createComponent = createComponentFactory({
        component: ListComponent,
        imports: [
            MatToolbarModule,
            MatListModule,
            MatIconModule,
            MatButtonModule,
            HttpClientTestingModule,
            RouterTestingModule
        ],
        providers: [
            provideMockStore({ initialState })
        ]
    });

    beforeEach(() => (spectator = createComponent()));
  
    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
