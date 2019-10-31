import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular-nx-example/material';

import { MainMenuComponent } from './main-menu.component';

@NgModule({
    declarations: [MainMenuComponent],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    exports: [MainMenuComponent]
})
export class MainMenuModule { }
