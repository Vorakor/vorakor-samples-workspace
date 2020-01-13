import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDynamicFormsRoutingModule } from './ngx-dynamic-forms-routing.module';
import { HomeComponent } from './home/home.component';
import { BasicHorizontalFormComponent } from './basic-horizontal-form/basic-horizontal-form.component';
import { BasicVerticalFormComponent } from './basic-vertical-form/basic-vertical-form.component';
import { InnerWorkingsComponent } from './inner-workings/inner-workings.component';
import { FutureFeaturesComponent } from './future-features/future-features.component';


@NgModule({
  declarations: [HomeComponent, BasicHorizontalFormComponent, BasicVerticalFormComponent, InnerWorkingsComponent, FutureFeaturesComponent],
  imports: [
    CommonModule,
    NgxDynamicFormsRoutingModule
  ]
})
export class NgxDynamicFormsModule { }
