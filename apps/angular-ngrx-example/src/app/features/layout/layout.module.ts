import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular-nx-example/material';

import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module'
import { MainMenuModule } from '../../shared/main-menu/main-menu.module';

@NgModule({
    declarations: [LayoutComponent],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MaterialModule,
        MainMenuModule
    ]
})
export class LayoutModule { }
