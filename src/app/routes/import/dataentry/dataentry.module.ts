import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataentryRoutingModule } from './dataentry-routing.module';
import { ArrivalentryComponent } from './arrivalentry/arrivalentry.component';
import { MaterialModule } from 'src/app/layouts/default/material.module';
@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    // MaterialModule,
    SharedModule,
    DataentryRoutingModule
  ]
})
export class DataentryModule { }
