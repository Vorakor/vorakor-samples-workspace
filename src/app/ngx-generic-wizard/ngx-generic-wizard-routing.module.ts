import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdvancedWizardExampleComponent } from './advanced-wizard-example/advanced-wizard-example.component';
import { BasicWizardExampleEndComponent } from './basic-wizard-example-end/basic-wizard-example-end.component';
import { BasicWizardExampleFirstComponent } from './basic-wizard-example-first/basic-wizard-example-first.component';
import { BasicWizardExampleSecondComponent } from './basic-wizard-example-second/basic-wizard-example-second.component';
import { BasicWizardExampleStartComponent } from './basic-wizard-example-start/basic-wizard-example-start.component';
import { BasicWizardExampleThirdComponent } from './basic-wizard-example-third/basic-wizard-example-third.component';
import { FutureFeaturesComponent } from './future-features/future-features.component';
import { HomeComponent } from './home/home.component';
import { InnerWorkingsComponent } from './inner-workings/inner-workings.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'basic',
        component: BasicWizardExampleStartComponent,
        children: [
            {
                path: 'first',
                component: BasicWizardExampleFirstComponent,
            },
            {
                path: 'second',
                component: BasicWizardExampleSecondComponent,
            },
            {
                path: 'third',
                component: BasicWizardExampleThirdComponent,
            },
            {
                path: 'example-final',
                component: BasicWizardExampleEndComponent,
            },
        ],
    },
    {
        path: 'advanced',
        component: AdvancedWizardExampleComponent,
    },
    {
        path: 'future',
        component: FutureFeaturesComponent,
    },
    {
        path: 'inner-workings',
        component: InnerWorkingsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NgxGenericWizardRoutingModule {}
