import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import { UserService } from '../user-service/user.service';



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    LoginService,
    UserService,
  ]
})
export class LoginServiceModule { }
