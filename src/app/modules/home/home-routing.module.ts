import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { Route } from 'src/app/shared/utils/routes/routes';
import { MainComponent } from './home/main/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: MainComponent,
      },
      {
        path: Route.PROFILE,
        component: ProfileComponent
      },
      {
        path: Route.PET,
        loadChildren: () => import('../pet/pet.module').then(m => m.PetModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
