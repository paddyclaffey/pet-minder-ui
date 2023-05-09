import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationButtonComponent } from './confirmation-button.component';
import { MaterialModule } from '../../material.module';



@NgModule({
  declarations: [
    ConfirmationButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ConfirmationButtonComponent,
  ]
})
export class ConformationButtonModule { }
