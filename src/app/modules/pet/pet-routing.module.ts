import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetComponent } from './pet.component';
import { PetRoute } from 'src/app/shared/utils/routes/routes';

const routes: Routes = [
  { path: `${PetRoute.VIEW}`, component: PetComponent },
  { path: `${PetRoute.VIEW}/:type`, component: PetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
