import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicHorizontalFormComponent } from './basic-horizontal-form/basic-horizontal-form.component';
import { BasicVerticalFormComponent } from './basic-vertical-form/basic-vertical-form.component';
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
        children: [
            {
                path: 'horizontal',
                component: BasicHorizontalFormComponent,
            },
            {
                path: 'vertical',
                component: BasicVerticalFormComponent,
            },
        ],
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
export class NgxDynamicFormsRoutingModule {}
