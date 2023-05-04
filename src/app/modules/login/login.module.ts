import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login.routing';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { LoginServiceModule } from 'src/app/shared/services/login-service/login.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    LoginServiceModule,
  ],
})
export class LoginModule { }
