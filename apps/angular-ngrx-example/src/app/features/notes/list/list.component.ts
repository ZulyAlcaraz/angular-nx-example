import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import * as fromNote from '../store/notes.reducer';
import { NotesStoreService } from '../store/notes-store.service';

@Component({
    selector: 'angular-nx-example-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
    private ngUnsubscribe$ = new Subject();
    list: fromNote.Note[];

    constructor(
        private readonly notesStoreService: NotesStoreService,
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        this.notesStoreService.loadNotes();
        this.notesStoreService
            .getList()
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(list => (this.list = list));
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }

    addNote(): void {
        this.router.navigate(['create']);
    }

    deleteNote(id: string): void {
        this.notesStoreService.deleteNote(id);
    }

    editNote(id: string): void {
        this.router.navigate(['edit', id]);
    }
}
