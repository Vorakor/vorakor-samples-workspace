import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FutureFeaturesComponent } from './future-features/future-features.component';
import { HeartbeatExampleComponent } from './heartbeat-example/heartbeat-example.component';
import { HomeComponent } from './home/home.component';
import { InnerWorkingsComponent } from './inner-workings/inner-workings.component';
import { WebSocketExampleComponent } from './web-socket-example/web-socket-example.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'heartbeat',
        component: HeartbeatExampleComponent
    },
    {
        path: 'websocket',
        component: WebSocketExampleComponent
    },
    {
        path: 'future',
        component: FutureFeaturesComponent,
    },
    {
        path: 'inner-workings',
        component: InnerWorkingsComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NgxHealthCheckerRoutingModule { }
