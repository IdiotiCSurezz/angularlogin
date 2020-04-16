import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ImportComponent } from './modules/import/Import.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'admin', component: LoginComponent },
{ path: 'login', component: LoginComponent },
{ path: 'registration', component: RegisterComponent },

{ path: 'dashboard',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }]
,canActivate: [AuthguardGuard]},

{ path: 'import',
  component: DefaultComponent,
  children: [{
    path: '',
    component: ImportComponent
  }]
,canActivate: [AuthguardGuard]},
// { path: 'dashboard', component: DefaultComponent,canActivate: [AuthguardGuard] },
// { path: 'import', component: ImportComponent,canActivate: [AuthguardGuard] },

]

@NgModule({
imports: [RouterModule.forRoot(routes, { useHash: true })],
exports: [RouterModule]
})

export class AppRoutingModule { }