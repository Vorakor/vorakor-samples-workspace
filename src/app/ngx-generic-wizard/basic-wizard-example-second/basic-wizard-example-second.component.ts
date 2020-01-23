import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgxDFConfiguration, NgxDFFieldDefinition } from 'ngx-dynamic-forms/lib/interfaces';

@Component({
    selector: 'app-basic-wizard-example-second',
    templateUrl: './basic-wizard-example-second.component.html',
    styleUrls: ['./basic-wizard-example-second.component.scss'],
})
export class BasicWizardExampleSecondComponent {
    formGroup: FormGroup = new FormGroup({});
    fields: NgxDFFieldDefinition[] = [
        { name: 'v-mileage', id: 'v-mileage', type: 'text', label: 'Vehicle Mileage', value: '' },
        {
            name: 'v-condition',
            id: 'v-condition',
            type: 'text',
            label: 'Vehicle Condition',
            value: '',
        },
        {
            name: 'v-color',
            id: 'v-color',
            type: 'text',
            label: 'Vehicle Color',
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
