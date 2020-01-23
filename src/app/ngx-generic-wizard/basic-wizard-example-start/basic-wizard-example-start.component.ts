import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INgxGwConfig, INgxGwStep, INgxGwStepStatusMap, NgxGenericWizardService } from 'ngx-generic-wizard';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    selector: 'app-basic-wizard-example-start',
    templateUrl: './basic-wizard-example-start.component.html',
    styleUrls: ['./basic-wizard-example-start.component.scss'],
})
export class BasicWizardExampleStartComponent implements OnInit {
    config: INgxGwConfig = {
        configId: 1,
        code: 'AUTOSALE',
        description: 'Sell your car wizard',
        baseUrl: 'ngx-gw/basic',
        finalizeUrl: 'ngx-gw/basic/example-final',
        ignoreIncomplete: false,
        completedDisabled: true,
        applicationId: 1,
        moduleId: 1,
    };
    steps: INgxGwStep[] = [
        {
            stepId: 1,
            configId: 1,
            status: {
                statusId: 1,
                code: 'INI',
                description: 'INITIAL',
            },
            code: 'MMBY',
            description: 'Make, Model, Body Type, and Year',
            stepOrder: 100,
            stepUrl: 'first',
            ignoreIncomplete: false,
        },
        {
            stepId: 2,
            configId: 1,
            status: {
                statusId: 1,
                code: 'INI',
                description: 'INITIAL',
            },
            code: 'MCC',
            description: 'Mileage, Condition and Color',
            stepOrder: 200,
            stepUrl: 'second',
            ignoreIncomplete: false,
        },
        {
            stepId: 3,
            configId: 1,
            status: {
                statusId: 1,
                code: 'INI',
                description: 'INITIAL',
            },
            code: 'COI',
            description: 'Current Owner Information',
            stepOrder: 300,
            stepUrl: 'third',
            ignoreIncomplete: false,
        },
    ];
    statusMap: INgxGwStepStatusMap = {
        initial: {
            statusId: 1,
            code: 'INI',
            description: 'INITIAL',
        },
        current: {
            statusId: 2,
            code: 'CRR',
            description: 'CURRENT',
        },
        complete: {
            statusId: 3,
            code: 'CMP',
            description: 'COMPLETE',
        },
        incomplete: {
            statusId: 4,
            code: 'ICMP',
            description: 'INCOMPLETE',
        },
    };
    pageLoaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    pageLoaded$: Observable<boolean> = this.pageLoaded.asObservable();
    currentStep: BehaviorSubject<INgxGwStep> = new BehaviorSubject<INgxGwStep>(null);
    currentStep$: Observable<INgxGwStep> = this.currentStep.asObservable();
    constructor(private router: Router, private ngxGwService: NgxGenericWizardService) {
        this.pageLoaded.next(true);
        this.currentStep.next({
            stepId: 1,
            configId: 1,
            status: {
                statusId: 2,
                code: 'CRR',
                description: 'CURRENT',
            },
            code: 'MMBY',
            description: 'Make, Model, Body Type, and Year',
            stepOrder: 100,
            stepUrl: 'first',
            ignoreIncomplete: false,
        });
    }

    ngOnInit() {
        this.ngxGwService.initialized$.subscribe(loaded => {
            if (!loaded) {
                this.ngxGwService.initializeWizard(
                    this.config,
                    this.steps,
                    this.statusMap,
                    this.pageLoaded$,
                    this.currentStep$,
                );
            }
        });
    }
}
