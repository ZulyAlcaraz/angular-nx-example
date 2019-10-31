import { Component, OnInit } from '@angular/core';
import { SpinnerStoreService } from '@angular-nx-example/spinner';

@Component({
    selector: 'angular-nx-example-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private readonly spinnerStore: SpinnerStoreService) {}
    ngOnInit(): void {
        // this.spinnerStore.showSpinner();
    }
}
