import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DatareportRoutingModule } from './datareport-routing.module';
import { ArrivalreportComponent } from './arrivalreport/arrivalreport.component';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    SharedModule,
    DatareportRoutingModule
  ]
})
export class DatareportModule { }
