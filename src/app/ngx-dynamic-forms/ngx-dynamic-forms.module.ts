import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { BasicHorizontalFormComponent } from './basic-horizontal-form/basic-horizontal-form.component';
import { BasicVerticalFormComponent } from './basic-vertical-form/basic-vertical-form.component';
import { FutureFeaturesComponent } from './future-features/future-features.component';
import { HomeComponent } from './home/home.component';
import { InnerWorkingsComponent } from './inner-workings/inner-workings.component';
import { NgxDynamicFormsRoutingModule } from './ngx-dynamic-forms-routing.module';

@NgModule({
    declarations: [
        HomeComponent,
        BasicHorizontalFormComponent,
        BasicVerticalFormComponent,
        InnerWorkingsComponent,
        FutureFeaturesComponent,
    ],
    imports: [CommonModule, MDBBootstrapModule, NgxDynamicFormsRoutingModule],
})
export class NgxDynamicFormsModule {}
