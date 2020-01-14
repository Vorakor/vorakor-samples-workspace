import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HomeComponent } from './home/home.component';
import { NgxGenericWizardRoutingModule } from './ngx-generic-wizard-routing.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, MDBBootstrapModule, NgxGenericWizardRoutingModule],
})
export class NgxGenericWizardModule {}
