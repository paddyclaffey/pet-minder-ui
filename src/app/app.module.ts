import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from  '@angular/material/button';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatIconModule } from  '@angular/material/icon';
import { MatSidenavContainer, MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';





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
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule
  ],
  providers: [MatSidenavContainer],
  bootstrap: [AppComponent]
})
export class AppModule { }
