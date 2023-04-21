import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePlugin, NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimalAnimationModule } from './shared/utils/animal/animal-animation.module';
import { PmHttpInterceptor } from './shared/services/http.inteceptor';
import { LoadingPageModule } from './shared/components/loading-page/loading-page.module';
import { UserState } from './modules/login/states/stores/login.state';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxsModule.forRoot([UserState]),
    NgxsStoragePluginModule.forRoot({
      key: ['user'],
      storage: StorageOption.SessionStorage,
    }),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AnimalAnimationModule,
    LoadingPageModule,
  ],
  providers: [
    NgxsStoragePlugin,
    { provide: HTTP_INTERCEPTORS, useClass: PmHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
