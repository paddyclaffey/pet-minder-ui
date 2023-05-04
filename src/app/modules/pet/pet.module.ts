import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { PetComponent } from './pet.component';
import { AnimalModule } from './animal/animal.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { PetDashboardComponent } from './pet-dashboard/pet-dashboard.component';
import { PetService } from './pet-service/pet.service';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PetComponent,
    PetDashboardComponent,
    PetCreateComponent,
  ],
  imports: [
    CommonModule,
    PetRoutingModule,
    MaterialModule,
    AnimalModule,
    ReactiveFormsModule,
  ],
  providers: [
    PetService,
  ]
})
export class PetModule { }
