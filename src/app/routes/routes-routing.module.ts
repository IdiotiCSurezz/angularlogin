import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: DashboardComponent,
  //   children: [
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //     {
  //       path: 'dashboard',
  //       component: DashboardComponent,
  //       data: { title: 'Dashboard', titleI18n: 'dashboard' },
  //     },
  //     {
  //       path: 'dataentry',
  //       loadChildren: () => import('./import/dataentry/dataentry.module').then(m => m.DataentryModule),
  //       data: { title: 'Import', titleI18n: 'Import' },
  //     },
  //     {
  //       path: 'datareport',
  //       loadChildren: () => import('./import/datareport/datareport.module').then(m => m.DatareportModule),
  //       data: { title: 'Import', titleI18n: 'Import' },
  //     },
  //     ],
  // },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
