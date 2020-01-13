import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxHealthCheckerRoutingModule } from './ngx-health-checker-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgxHealthCheckerRoutingModule
  ]
})
export class NgxHealthCheckerModule { }
