import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>  import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    loadChildren: () =>  import('./modules/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
    // add redirect guard to login if token and home if 
  },
  {
    path: 'register',
    loadChildren: () => import('./modules/register/register.module').then((m) => m.RegisterModule),
    // add redirect guard to login if token and home if 
  },
  // {
  //   path: 'pet',
  //   loadChildren: () => import('./modules/pet/pet.module').then((m) => m.PetModule),
  //   // add redirect guard to login if token and home if 
  // },
  // {
  //   path: 'admin',
  //   loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
  //   // canActivate: [AuthGuard]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard], // add AuthGuard to providers
})
export class AppRoutingModule { }
