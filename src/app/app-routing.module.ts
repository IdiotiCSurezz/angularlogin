import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
// import { ImportModule } from './routes/import/import.module';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
{ path: '', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'dashboard',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }]
,canActivate: [AuthguardGuard]},

// { path: 'import',
//   component: DefaultComponent,
//   children: [{
//     path: '',
//     component: ImportComponent
//   }]
// ,canActivate: [AuthguardGuard]},
{ path: 'import/dataentry/arrivalentry', 
component: DefaultComponent,
loadChildren: () => import('./routes/import/dataentry/dataentry.module').then(m => m.DataentryModule)
,canActivate: [AuthguardGuard] },
{ path: 'import/datareport/arrivalreport', 
component: DefaultComponent,
loadChildren: () => import('./routes/import/datareport/datareport.module').then(m => m.DatareportModule)
 },
// { path: 'dashboard', component: DefaultComponent,canActivate: [AuthguardGuard] },
// { path: 'import', component: ImportComponent,canActivate: [AuthguardGuard] },

]

@NgModule({
imports: [RouterModule.forRoot(routes, { useHash: true })],
exports: [RouterModule]
})

export class AppRoutingModule { }