import { Component, OnDestroy } from '@angular/core';
import { INgxHcConfig, NgxHealthCheckerService } from 'ngx-health-checker';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
    healthCheckerConfig: INgxHcConfig = {
        defaultFrequency: 4 * 60,
        maxFrequency: 6 * 60,
        debug: true,
        servers: [
            {
                id: 1,
                url: '/api',
                endpoints: [
                    {
                        id: 1,
                        url: '/true',
                        method: 'get',
                        healthy: true,
                        type: 'api',
                    },
                ],
            },
        ],
    };
    subs;
    constructor(private ngxHcService: NgxHealthCheckerService) {
        // this.subs = this.ngxHcService.initialized$.pipe(filter(i => i !== null)).subscribe(init => {
        //   if (!init) {
        //     this.ngxHcService.initializeHealthChecker(this.healthCheckerConfig);
        //   }
        // });
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
