import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { SaveComponent } from './save/save.component';

const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'create',
        component: SaveComponent
    },
    {
        path: 'edit/:id',
        component: SaveComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotesRoutingModule {}
