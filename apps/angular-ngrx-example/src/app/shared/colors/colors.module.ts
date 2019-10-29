import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { ColorsComponent } from './colors.component';
import { ColorsEffects } from './store/colors.effects';
import * as fromColors from './store/colors.reducer';
import { MaterialModule } from '../../material.module';

@NgModule({
    declarations: [ColorsComponent],
    exports: [ColorsComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature(fromColors.colorsFeatureKey, fromColors.reducer),
        EffectsModule.forFeature([ColorsEffects]),
        HttpClientModule,
        MaterialModule
    ]
})
export class ColorsModule {}
