import {
    Input,
    OnDestroy,
    OnInit,
    Optional,
    Self,
    ElementRef,
    HostBinding,
} from '@angular/core';
import { MatFormFieldControl } from '@angular/material';
import { NgControl } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';

export abstract class BaseMatFormFieldControlComponent<T>
    implements OnInit, OnDestroy, MatFormFieldControl<any> {
    static nextId = 0;
    ngUnsubscribe$ = new Subject();
    stateChanges = new Subject<void>();
    focused = false;

    @HostBinding('id') id: string;
    @HostBinding('attr.aria-describedby') describedBy = '';

    private _placeholder = '';
    @Input()
    get placeholder(): string {
        return this._placeholder;
    }
    set placeholder(value: string) {
        this._placeholder = value;
        this.stateChanges.next();
    }

    private _required = false;
    @Input()
    get required(): boolean {
        return this._required;
    }
    set required(value: boolean) {
        this._required = coerceBooleanProperty(value);
        this.stateChanges.next();
    }

    private _disabled = false;
    @Input()
    get disabled(): boolean {
        return this._disabled;
    }
    set disabled(value: boolean) {
        this._disabled = coerceBooleanProperty(value);
        this.stateChanges.next();
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    get errorState(): boolean {
        return (
            this.ngControl &&
            this.ngControl.errors !== null &&
            !!this.ngControl.touched
        );
    }

    // Placeholders for the callbacks which are later provided by the form
    onTouchedCallback: () => void = () => {};
    onChangeCallback: (_: any) => void = () => {};

    constructor(
        private readonly idPrefix: string,
        @Optional() @Self() public ngControl: NgControl,
        private readonly focusMonitor: FocusMonitor,
        private readonly elementRef: ElementRef<HTMLElement>
    ) {
        this.focusMonitor.monitor(elementRef, true).subscribe(origin => {
            this.focused = !!origin;
            this.stateChanges.next();
        });
        if (this.ngControl !== null) {
            this.ngControl.valueAccessor = this;
        }
    }

    ngOnInit(): void {
        BaseMatFormFieldControlComponent.nextId++;
        this.id = `${this.idPrefix}-${BaseMatFormFieldControlComponent.nextId}`;
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
        this.stateChanges.complete();
        this.focusMonitor.stopMonitoring(this.elementRef);
    }

    setDescribedByIds(ids: string[]): void {
        this.describedBy = ids.join(' ');
    }

    onContainerClick(event: MouseEvent): void {
        if ((event.target as Element).tagName.toLowerCase() !== 'input') {
            this.elementRef.nativeElement.querySelector('input').focus();
        }
    }

    // should be implemented in child components
    get value(): T {
        throw new Error('Must be implemented in child components');
    }
    get empty(): boolean {
        return !!this.value;
    }

    get shouldLabelFloat(): boolean {
        return this.focused || !this.empty;
    }

    registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchedCallback = fn;
    }

    abstract writeValue(value: string): void;
}
