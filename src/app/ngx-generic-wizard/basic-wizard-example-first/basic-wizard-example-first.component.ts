import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxDFConfiguration, NgxDFFieldDefinition } from 'ngx-dynamic-forms/lib/interfaces';

@Component({
    selector: 'app-basic-wizard-example-first',
    templateUrl: './basic-wizard-example-first.component.html',
    styleUrls: ['./basic-wizard-example-first.component.scss'],
})
export class BasicWizardExampleFirstComponent {
    formGroup: FormGroup = new FormGroup({});
    fields: NgxDFFieldDefinition[] = [
        { name: 'v-make', id: 'v-make', type: 'text', label: 'Vehicle Make', value: '' },
        { name: 'v-model', id: 'v-model', type: 'text', label: 'Vehicle Model', value: '' },
        {
            name: 'v-body-type',
            id: 'v-body-type',
            type: 'text',
            label: 'Vehicle Body Type',
            value: '',
        },
        { name: 'v-year', id: 'v-year', type: 'text', label: 'Vehicle Year', value: '' },
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
