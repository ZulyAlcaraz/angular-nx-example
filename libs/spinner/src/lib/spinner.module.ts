import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NxModule } from '@nrwl/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@angular-nx-example/material';

import { SpinnerComponent } from './spinner/spinner.component';
import * as fromSpinner from './store/spinner.reducer';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NxModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    StoreModule.forFeature(fromSpinner.SPINNER_FEATURE_KEY, fromSpinner.reducer),
    FlexLayoutModule
  ],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent]
})
export class SpinnerModule {}
