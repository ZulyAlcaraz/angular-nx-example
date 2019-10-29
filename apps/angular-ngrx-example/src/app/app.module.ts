import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { reducers, metaReducers } from './store';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(
            reducers,
            {
                metaReducers,
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                }
            }
        ),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
