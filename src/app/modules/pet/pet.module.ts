import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { PetComponent } from './pet.component';
import { AnimalModule } from './animal/animal.module';


@NgModule({
  declarations: [
    PetComponent,
  ],
  imports: [
    CommonModule,
    PetRoutingModule,
    AnimalModule
  ]
})
export class PetModule { }
