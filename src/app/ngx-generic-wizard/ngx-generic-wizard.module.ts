import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxGenericWizardRoutingModule } from './ngx-generic-wizard-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgxGenericWizardRoutingModule
  ]
})
export class NgxGenericWizardModule { }
