import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxDFConfiguration, NgxDFFieldDefinition } from 'ngx-dynamic-forms/lib/interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    selector: 'app-basic-vertical-form',
    templateUrl: './basic-vertical-form.component.html',
    styleUrls: ['./basic-vertical-form.component.scss'],
})
export class BasicVerticalFormComponent implements OnInit {
    ex1FormGroup: FormGroup;
    ex2FormGroup: FormGroup;
    ex1Config: NgxDFConfiguration = {
        submitBtnText: 'Submit',
        resetBtn: true,
        resetBtnText: 'Reset',
    };
    // ex2Config: NgxDFConfiguration = {
    //     resetBtn: true,
    //     resetBtnText: 'Reset',
    //     submitBtnText: 'Submit',
    // };
    ex1Fields: NgxDFFieldDefinition[] = [
        {
            name: 'country-US',
            id: 'country-US',
            type: 'checkbox-btn',
            label: 'United States',
            value: 'US',
        },
        {
            name: 'country-CA',
            id: 'country-CA',
            type: 'checkbox-btn',
            label: 'Canada',
            value: 'CA',
        },
        {
            name: 'country-MX',
            id: 'country-MX',
            type: 'checkbox-btn',
            label: 'Mexico',
            value: 'MX',
        },
    ];
    // ex1Fields: NgxDFFieldDefinition[] = [
    //     {
    //         name: 'country-US',
    //         id: 'country-US',
    //         type: 'checkbox-btn',
    //         label: 'United States',
    //         value: 'US',
    //     },
    //     {
    //         name: 'country-CA',
    //         id: 'country-CA',
    //         type: 'checkbox-btn',
    //         label: 'Canada',
    //         value: 'CA',
    //     },
    //     {
    //         name: 'country-MX',
    //         id: 'country-MX',
    //         type: 'checkbox-btn',
    //         label: 'Mexico',
    //         value: 'MX',
    //     },
    //     {
    //         name: 'country-JP',
    //         id: 'country-JP',
    //         type: 'checkbox-btn',
    //         label: 'Japan',
    //         value: 'JP',
    //     },
    // ];
    // ex2Opts: { value: any; label: string }[] = [
    //     {
    //         value: 1,
    //         label: 'Automatic',
    //     },
    //     {
    //         value: 2,
    //         label: 'Manual',
    //     },
    // ];
    // ex2Fields: NgxDFFieldDefinition[] = [
    //     {
    //         name: 'transType',
    //         id: 'transType',
    //         type: 'select',
    //         label: 'Transmission Type',
    //         options: this.ex2Opts,
    //     },
    // ];
    ex1Results: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    ex1Results$: Observable<string> = this.ex1Results.asObservable();
    ex2Results: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    ex2Results$: Observable<string> = this.ex2Results.asObservable();
    constructor() {
        this.ex1FormGroup = new FormGroup({});
        // this.ex2FormGroup = new FormGroup({});
    }

    ngOnInit() {}

    ex1Submit(event) {
        this.ex1Results.next(JSON.stringify(event));
    }

    ex1Reset(event) {
        this.ex1FormGroup.reset();
    }

    // ex2Submit(event) {
    //     this.ex2Results.next(JSON.stringify(event));
    // }

    // ex2Reset(event) {
    //     this.ex2FormGroup.reset();
    // }
}
