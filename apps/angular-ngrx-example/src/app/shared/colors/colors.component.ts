import { Component, OnInit, OnDestroy, Optional, Self, ElementRef, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
import { MatFormFieldControl, MatSelectionList, MatSelectionListChange } from '@angular/material';
import { takeUntil } from 'rxjs/operators';

import { ColorsStoreService } from './store/colors-store.service';
import { BaseMatFormFieldControlComponent } from '../base-mat-form-field-control/base-mat-form-field-control.component';

@Component({
    selector: 'angular-nx-example-colors',
    templateUrl: './colors.component.html',
    styleUrls: ['./colors.component.scss'],
    providers: [
        {
            provide: MatFormFieldControl,
            useExisting: ColorsComponent
        }
    ]
})
export class ColorsComponent extends BaseMatFormFieldControlComponent<any> implements OnInit, OnDestroy {
    colors: string[] = [];

    private _value: string;
    public get value(): string {
        return this._value;
    }
    public set value(value: string) {
        this._value = value;
        this.stateChanges.next();
    }

    @ViewChild(MatSelectionList, { static: false })
    selectionList: MatSelectionList;

    constructor(
        @Optional() @Self() public ngControl: NgControl,
        focusMonitor: FocusMonitor,
        elementRef: ElementRef<HTMLElement>,
        private readonly colorsStoreService: ColorsStoreService
    ) {
        super('colors', ngControl, focusMonitor, elementRef);
    }

    ngOnInit(): void {
        this.colorsStoreService.loadColors();
        this.colorsStoreService
            .getList()
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(colors => this.colors = colors);
    }

    colorChange(event: MatSelectionListChange): void {
        this.selectionList.deselectAll();
        event.option.selected = true;
        this.value = event.option.value;
        this.stateChanges.next();
        this.onChangeCallback(this.value);
        this.onTouchedCallback();
    }

    writeValue(value: string): void {
        this.value = value;
    }
}
