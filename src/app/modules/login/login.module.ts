import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { LoginRoutingModule } from './login.routing';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AuthState } from './states/stores/login.state';
import { ProfileModule } from '../profile/profile.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    NgxsModule.forFeature([AuthState]),
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ProfileModule,
  ]
})
export class LoginModule { }
