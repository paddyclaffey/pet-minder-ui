import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetComponent } from './pet.component';
import { PetRoute, Route } from 'src/app/shared/utils/routes/routes';

const routes: Routes = [
  {
      path: PetRoute.VIEW_ALL,
      component: PetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
