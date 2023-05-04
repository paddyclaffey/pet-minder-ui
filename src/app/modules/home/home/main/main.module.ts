import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { MainComponent } from './main/main.component';
import { ActionComponent } from './action/action.component';
import { PetService } from 'src/app/modules/pet/pet-service/pet.service';



@NgModule({
  declarations: [
    ActionComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [
    PetService,
  ]
})
export class MainModule { }
