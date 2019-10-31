import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '@angular-nx-example/material';

import { ColorsComponent } from './colors.component';
import { ColorsEffects } from './store/colors.effects';
import * as fromColors from './store/colors.reducer';

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
