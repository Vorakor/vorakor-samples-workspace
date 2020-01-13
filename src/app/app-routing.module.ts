import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'ngx-df',
        loadChildren: () =>
            import('./ngx-dynamic-forms/ngx-dynamic-forms.module').then(
                mod => mod.NgxDynamicFormsModule,
            ),
    },
    {
        path: 'ngx-gw',
        loadChildren: () =>
            import('./ngx-generic-wizard/ngx-generic-wizard.module').then(
                mod => mod.NgxGenericWizardModule,
            ),
    },
    {
        path: 'ngx-hc',
        loadChildren: () =>
            import('./ngx-health-checker/ngx-health-checker.module').then(
                mod => mod.NgxHealthCheckerModule,
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
