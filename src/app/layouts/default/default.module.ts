import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/routes/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import {FilterComponent} from 'src/app/model/filter/filter.component';
import { ArrivalentryComponent } from 'src/app/routes/import/dataentry/arrivalentry/arrivalentry.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {DataService} from 'src/app/service/data.service';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatDividerModule } from '@angular/material/divider';
// import {  MatCardModule } from '@angular/material/card';
// import {  MatPaginatorModule } from '@angular/material/paginator';
// import {  MatTableModule } from '@angular/material/table';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArrivalreportComponent } from 'src/app/routes/import/datareport/arrivalreport/arrivalreport.component';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ArrivalentryComponent,
    ArrivalreportComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    // MatSidenavModule,
    // MatDividerModule,
    FlexLayoutModule,
    // MatCardModule,
    // MatPaginatorModule,
    BrowserAnimationsModule
    // MatTableModule
  ],
  providers: [
    DataService
  ],
})
export class DefaultModule { }

