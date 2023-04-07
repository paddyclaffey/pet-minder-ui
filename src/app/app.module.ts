import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AnimalAnimationModule } from './shared/utils/animal/animal-animation.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxsModule.forRoot([]),
    NgxsStoragePluginModule.forRoot({
      key: 'auth.token'
    }),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AnimalAnimationModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
