import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SpinnerStoreService } from '../store/spinner-store.service';

@Component({
  selector: 'angular-nx-example-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
    
    loading: Observable<boolean>;

    constructor(private readonly spinnerStoreService: SpinnerStoreService) { }

    ngOnInit(): void {
        this.loading = this.spinnerStoreService.getSpinnerValue();
    }
}
