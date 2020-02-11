import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HomeComponent } from './home/home.component';
import { NgxHealthCheckerRoutingModule } from './ngx-health-checker-routing.module';
import { FutureFeaturesComponent } from './future-features/future-features.component';
import { InnerWorkingsComponent } from './inner-workings/inner-workings.component';
import { HeartbeatExampleComponent } from './heartbeat-example/heartbeat-example.component';
import { WebSocketExampleComponent } from './web-socket-example/web-socket-example.component';

@NgModule({
    declarations: [HomeComponent, FutureFeaturesComponent, InnerWorkingsComponent, HeartbeatExampleComponent, WebSocketExampleComponent],
    imports: [CommonModule, MDBBootstrapModule, NgxHealthCheckerRoutingModule],
})
export class NgxHealthCheckerModule {}
