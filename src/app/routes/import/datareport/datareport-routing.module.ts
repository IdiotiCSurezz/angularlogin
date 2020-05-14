import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArrivalreportComponent } from './arrivalreport/arrivalreport.component';

const routes: Routes = [{ path: 'arrivalreport', component: ArrivalreportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatareportRoutingModule { }
