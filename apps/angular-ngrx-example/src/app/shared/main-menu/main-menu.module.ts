import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainMenuComponent } from './main-menu.component';
import { MaterialModule } from '../../material.module';

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
