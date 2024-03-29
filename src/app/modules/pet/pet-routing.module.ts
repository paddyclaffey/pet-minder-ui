import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetRoute } from 'src/app/shared/utils/routes/routes';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetDashboardComponent } from './pet-dashboard/pet-dashboard.component';
import { PetCreatesSheduleComponent } from './pet-create-schedule/pet-create-schedule.component';

const routes: Routes = [
  {
    path: PetRoute.DASHBOARD,
    component: PetDashboardComponent,
  },
  {
    path: PetRoute.CREATE,
    component: PetCreateComponent,
  },
  {
    path: `${PetRoute.CREATE_SCHEDULE}/:petId`,
    component: PetCreatesSheduleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
