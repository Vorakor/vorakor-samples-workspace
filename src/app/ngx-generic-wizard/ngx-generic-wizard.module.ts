import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxDynamicFormsModule } from 'ngx-dynamic-forms';
import { NgxGenericWizardModule as NgxGWModule, NgxGenericWizardService } from 'ngx-generic-wizard';

import { AdvancedWizardExampleComponent } from './advanced-wizard-example/advanced-wizard-example.component';
import { BasicWizardExampleEndComponent } from './basic-wizard-example-end/basic-wizard-example-end.component';
import { BasicWizardExampleFirstComponent } from './basic-wizard-example-first/basic-wizard-example-first.component';
import { BasicWizardExampleSecondComponent } from './basic-wizard-example-second/basic-wizard-example-second.component';
import { BasicWizardExampleStartComponent } from './basic-wizard-example-start/basic-wizard-example-start.component';
import { BasicWizardExampleThirdComponent } from './basic-wizard-example-third/basic-wizard-example-third.component';
import { FutureFeaturesComponent } from './future-features/future-features.component';
import { HomeComponent } from './home/home.component';
import { InnerWorkingsComponent } from './inner-workings/inner-workings.component';
import { NgxGenericWizardRoutingModule } from './ngx-generic-wizard-routing.module';

@NgModule({
    declarations: [
        HomeComponent,
        BasicWizardExampleStartComponent,
        BasicWizardExampleFirstComponent,
        BasicWizardExampleSecondComponent,
        BasicWizardExampleThirdComponent,
        BasicWizardExampleEndComponent,
        AdvancedWizardExampleComponent,
        InnerWorkingsComponent,
        FutureFeaturesComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MDBBootstrapModule,
        NgxGWModule,
        NgxDynamicFormsModule,
        NgxGenericWizardRoutingModule,
    ],
    providers: [NgxGenericWizardService],
})
export class NgxGenericWizardModule {}
