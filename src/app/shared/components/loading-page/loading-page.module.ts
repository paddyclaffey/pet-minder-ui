import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPageComponent } from './loading-page.component';
import { MaterialModule } from '../../material.module';



@NgModule({
  declarations: [
    LoadingPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class LoadingPageModule { }
