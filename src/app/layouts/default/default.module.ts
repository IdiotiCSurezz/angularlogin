import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ImportComponent } from 'src/app/modules/import/import.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatDividerModule } from '@angular/material/divider';
// import {  MatCardModule } from '@angular/material/card';
// import {  MatPaginatorModule } from '@angular/material/paginator';
// import {  MatTableModule } from '@angular/material/table';
import { Material1Module } from './material1.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    ImportComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    Material1Module,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    // MatSidenavModule,
    // MatDividerModule,
    FlexLayoutModule,
    // MatCardModule,
    // MatPaginatorModule,
    // MatTableModule
  ],
  providers: [
  ]
})
export class DefaultModule { }

