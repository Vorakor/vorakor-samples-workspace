import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxDFFieldDefinition, NgxDFConfiguration } from 'ngx-dynamic-forms/lib/interfaces';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-basic-horizontal-form',
    templateUrl: './basic-horizontal-form.component.html',
    styleUrls: ['./basic-horizontal-form.component.scss'],
})
export class BasicHorizontalFormComponent implements OnInit {
    ex1FormGroup: FormGroup;
    ex2FormGroup: FormGroup;
    ex1Config: NgxDFConfiguration = {
        formClass: 'ngx-df-form-inline',
        submitBtnText: 'Yo! Submit Me!',
    };
    ex2Config: NgxDFConfiguration = {
        formClass: 'ngx-df-form-inline',
        resetBtn: true,
        resetBtnText: 'Reset',
        submitBtnText: 'Submit',
    };
    ex1Fields: NgxDFFieldDefinition[] = [
        {
            name: 'searchQuery',
            id: 'searchQuery',
            type: 'text',
            label: 'Search',
        },
    ];
    ex2Opts: { value: any; label: string }[] = [
        {
            value: 1,
            label: 'Automatic',
        },
        {
            value: 2,
            label: 'Manual',
        },
    ];
    ex2Fields: NgxDFFieldDefinition[] = [
        {
            name: 'transType',
            id: 'transType',
            type: 'select',
            label: 'Transmission Type',
            options: this.ex2Opts,
        },
    ];
    ex1Results: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    ex1Results$: Observable<string> = this.ex1Results.asObservable();
    ex2Results: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    ex2Results$: Observable<string> = this.ex2Results.asObservable();
    constructor() {
        this.ex1FormGroup = new FormGroup({});
        this.ex2FormGroup = new FormGroup({});
    }

    ngOnInit() {}

    ex1Submit(event) {
        this.ex1Results.next(JSON.stringify(event));
    }

    ex2Submit(event) {
        this.ex2Results.next(JSON.stringify(event));
    }

    ex2Reset(event) {
        this.ex2FormGroup.reset();
    }
}
