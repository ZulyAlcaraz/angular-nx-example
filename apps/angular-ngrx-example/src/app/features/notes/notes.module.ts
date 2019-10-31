import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '@angular-nx-example/material';

import * as fromNote from './store/notes.reducer';
import { ListComponent } from './list/list.component';
import { NotesRoutingModule } from './notes-routing.module';
import { ColorsModule } from '../../shared/colors/colors.module';
import { SaveComponent } from './save/save.component';
import { NotesEffects } from './store/notes.effects';

@NgModule({
    declarations: [ListComponent, SaveComponent],
    imports: [
        CommonModule,
        NotesRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        ColorsModule,
        StoreModule.forFeature(fromNote.noteFeatureKey, fromNote.reducer),
        EffectsModule.forFeature([NotesEffects]),
        HttpClientModule
    ]
})
export class NotesModule { }
