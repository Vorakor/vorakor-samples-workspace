import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxHealthCheckerModule as NgxHcModule, NgxHealthCheckerService } from 'ngx-health-checker';

import { FutureFeaturesComponent } from './future-features/future-features.component';
import { HeartbeatExampleComponent } from './heartbeat-example/heartbeat-example.component';
import { HomeComponent } from './home/home.component';
import { InnerWorkingsComponent } from './inner-workings/inner-workings.component';
import { NgxHealthCheckerRoutingModule } from './ngx-health-checker-routing.module';
import { WebSocketExampleComponent } from './web-socket-example/web-socket-example.component';

@NgModule({
    declarations: [
        HomeComponent,
        FutureFeaturesComponent,
        InnerWorkingsComponent,
        HeartbeatExampleComponent,
        WebSocketExampleComponent,
    ],
    imports: [CommonModule, MDBBootstrapModule, NgxHealthCheckerRoutingModule, NgxHcModule],
    providers: [NgxHealthCheckerService],
})
export class NgxHealthCheckerModule {}
