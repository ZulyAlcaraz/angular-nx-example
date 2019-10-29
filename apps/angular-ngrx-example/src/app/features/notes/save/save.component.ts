import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { NotesStoreService } from '../store/notes-store.service';

@Component({
  selector: 'angular-nx-example-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit, OnDestroy {
    noteId: string;
    form: FormGroup;

    private ngUnsubscribe$ = new Subject();

    constructor(
        private readonly location: Location,
        private readonly noteStoreService: NotesStoreService,
        private readonly activatedRoute: ActivatedRoute
    ) {
        this.form = new FormGroup({
            id: new FormControl('', Validators.required),
            title: new FormControl('', Validators.required),
            content: new FormControl('', Validators.required),
            color: new FormControl('')
        });
    }

    ngOnInit(): void {
        this.activatedRoute.params
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(params => {
                this.noteId = params.id;
                if (this.noteId) {
                    this.noteStoreService.loadNote(this.noteId);
                    this.noteStoreService.getNote()
                        .pipe(
                            takeUntil(this.ngUnsubscribe$),
                            filter(note => !!note)
                        )
                        .subscribe(note => this.form.patchValue(note));
                } else {
                    const id = this.noteId || Math.random().toString(36).substr(2, 9);
                    this.form.get('id').patchValue(id);
                }
            });
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    }

    cancel(): void {
        this.location.back();
    }

    onSubmit(): void {
        if (!this.noteId) {
            this.noteStoreService.addNote(this.form.getRawValue());
        } else {
            this.noteStoreService.editNote(this.form.getRawValue());
        }
        this.cancel();
    }
}
