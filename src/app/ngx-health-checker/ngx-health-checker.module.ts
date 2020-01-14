import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HomeComponent } from './home/home.component';
import { NgxHealthCheckerRoutingModule } from './ngx-health-checker-routing.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, MDBBootstrapModule, NgxHealthCheckerRoutingModule],
})
export class NgxHealthCheckerModule {}
