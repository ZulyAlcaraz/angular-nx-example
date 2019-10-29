import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { MaterialModule } from '../../material.module';
import { HomeRoutingModule } from './home-routing.module'
import { MainMenuModule } from '../../shared/main-menu/main-menu.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MaterialModule,
        MainMenuModule
    ]
})
export class HomeModule { }
