import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { PetComponent } from './pet/pet.component';
import { AnimalModule } from './animal/animal.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { PetDashboardComponent } from './pet-dashboard/pet-dashboard.component';
import { PetService } from './pet-service/pet.service';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConformationButtonModule } from 'src/app/shared/components/confirmation-button/confirmation-button.module';
import { LoadingModule } from 'src/app/shared/components/loading/loading.module';


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
    ConformationButtonModule,
    LoadingModule,
  ],
  providers: [
    PetService,
  ]
})
export class PetModule { }
