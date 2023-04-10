import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogComponent } from './dog/dog.component';
import { AnimalAnimationModule } from 'src/app/shared/utils/animal/animal-animation.module';
import { SharkComponent } from './shark/shark.component';
import { AnimalComponent } from './animal/animal.component';


@NgModule({
  declarations: [
    DogComponent,
    SharkComponent,
    AnimalComponent,
  ],
  imports: [
    CommonModule,
    AnimalAnimationModule,
  ],
  exports: [
    AnimalComponent,
  ]
})
export class AnimalModule { }
