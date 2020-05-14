import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArrivalentryComponent } from './arrivalentry/arrivalentry.component';
import { CopydocComponent } from './copydoc/copydoc.component';
import { BeStatusComponent } from './be-status/be-status.component';
import { OriginaldocComponent } from './originaldoc/originaldoc.component';
const routes: Routes = [
  { path: 'arrivalentry', component: ArrivalentryComponent },
  { path: 'copydoc', component: CopydocComponent },
  { path: 'be-status', component: BeStatusComponent },
  { path: 'originaldoc', component: OriginaldocComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataentryRoutingModule { }
