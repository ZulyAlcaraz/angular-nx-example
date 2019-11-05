import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { of } from 'rxjs';
import { MockComponent } from 'ng-mocks';

import { SaveComponent } from './save.component';
import { NotesStoreService } from '../store/notes-store.service';
import { ColorsComponent } from '../../../shared/colors/colors.component';

describe('SaveComponent', () => {
    let spectator: Spectator<SaveComponent>;
    const createComponent = createComponentFactory({
        component: SaveComponent,
        mocks: [
            NotesStoreService,
            Location
        ],
        imports: [
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
        ],
        declarations: [MockComponent(ColorsComponent)],
        providers: [
            mockProvider(ActivatedRoute, { params: of({ id: '1' }) })
        ]
    });

    beforeEach(() => (spectator = createComponent()));
  
    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });
});
