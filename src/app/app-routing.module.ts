import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from './shared/utils/routes/routes';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>  import('./modules/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/register/register.module').then((m) => m.RegisterModule),
    // add redirect guard to login if token and home if 
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
    // canActivate: [AuthGuard]
  },
  { path: Route.PET, loadChildren: () => import('./pet/pet.module').then(m => m.PetModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard], // add AuthGuard to providers
})
export class AppRoutingModule { }
