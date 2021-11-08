import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LeadsComponent } from './leads/leads.component';
import { AuthGuard } from './auth.guard';
import { ReverseGuard } from './reverse.guard';
import { DataComponent } from './data/data.component';
const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    canActivate:[ReverseGuard]
  },
  {
    path:'login',
    component: LoginComponent,
    canActivate:[ReverseGuard]
  },
  {
    path:'leads',
    component: LeadsComponent,
    canActivate:[AuthGuard] 
  },
  {
    path:'data',
    component: DataComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
