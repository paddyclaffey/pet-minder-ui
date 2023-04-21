import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ProfileModule } from '../profile/profile.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProfileModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
