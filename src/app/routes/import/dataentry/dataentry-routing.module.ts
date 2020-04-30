import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArrivalentryComponent } from './arrivalentry/arrivalentry.component';

const routes: Routes = [{ path: '', component: ArrivalentryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataentryRoutingModule { }
