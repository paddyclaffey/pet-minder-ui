import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProfileModule { }
