import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuardGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
    {path:'',component:LandingComponent},
    {path:'dash',canActivate:[authGuardGuard],component:DashboardComponent},
    // {path:'**',component:LandingComponent}
    {path:'empmng', canActivate:[authGuardGuard],loadChildren:()=>import('./empmng/empmng.module').then(m=>m.EmpmngModule)}
];
