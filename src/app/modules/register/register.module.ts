import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { RegisterRoutingModule } from './register.routing';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ]
})
export class RegisterModule { }
