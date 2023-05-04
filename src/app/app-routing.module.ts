import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { Route } from './shared/utils/routes/routes';
import { RegisterGuard } from './modules/register/register.guard';

const routes: Routes = [
  {
    path: Route.LOGIN,
    loadChildren: () =>  import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: Route.REGISTER,
    loadChildren: () => import('./modules/register/register.module').then((m) => m.RegisterModule),
    canActivate: [RegisterGuard],
    // add redirect guard to login if token and home if 
  },
  {
    path: '',
    loadChildren: () =>  import('./modules/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
    // add redirect guard to login if token and home if 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, RegisterGuard], // add AuthGuard to providers
})
export class AppRoutingModule { }
