import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { LoginRoutingModule } from './login.routing';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { LoginService } from 'src/app/core/services/login.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [
    LoginService,
  ]
})
export class LoginModule { }
