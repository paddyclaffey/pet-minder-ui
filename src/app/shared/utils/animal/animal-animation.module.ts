import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalAnimationComponent } from './animal-animation/animal-animation.component';


@NgModule({
  declarations: [
    AnimalAnimationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AnimalAnimationComponent,
  ]
})
export class AnimalAnimationModule { }
