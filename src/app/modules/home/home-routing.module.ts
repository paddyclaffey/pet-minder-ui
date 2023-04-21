import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { Route } from 'src/app/shared/utils/routes/routes';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
        {
          path: Route.PROFILE,
          component: ProfileComponent
        },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
