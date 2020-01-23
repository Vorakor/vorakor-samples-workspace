import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxDFConfiguration, NgxDFFieldDefinition } from 'ngx-dynamic-forms/lib/interfaces';

@Component({
    selector: 'app-basic-wizard-example-third',
    templateUrl: './basic-wizard-example-third.component.html',
    styleUrls: ['./basic-wizard-example-third.component.scss'],
})
export class BasicWizardExampleThirdComponent {
    formGroup: FormGroup = new FormGroup({});
    fields: NgxDFFieldDefinition[] = [
        { name: 'vo-first', id: 'vo-first', type: 'text', label: 'Owner First Name', value: '' },
        { name: 'vo-last', id: 'vo-last', type: 'text', label: 'Owner Last Name', value: '' },
        {
            name: 'vo-email',
            id: 'vo-email',
            type: 'text',
            label: 'Owner Email',
            value: '',
        },
        {
            name: 'vo-address-1',
            id: 'vo-address-1',
            type: 'text',
            label: 'Owner Address 1',
            value: '',
        },
        {
            name: 'vo-address-2',
            id: 'vo-address-2',
            type: 'text',
            label: 'Owner Address 2',
            value: '',
        },
        { name: 'vo-city', id: 'vo-city', type: 'text', label: 'Owner City', value: '' },
        { name: 'vo-state', id: 'vo-state', type: 'text', label: 'Owner State', value: '' },
        {
            name: 'vo-postal-code',
            id: 'vo-postal-code',
            type: 'text',
            label: 'Owner Postal Code',
            value: '',
        },
    ];
    formConfig: NgxDFConfiguration = {
        submitBtnText: 'Submit',
        resetBtn: true,
        resetBtnText: 'Reset Form',
        footerDivider: true,
    };
    constructor() {}

    submit(event) {
        console.log(event);
    }

    reset(event) {
        console.log(event);
        this.formGroup.reset();
    }
}
