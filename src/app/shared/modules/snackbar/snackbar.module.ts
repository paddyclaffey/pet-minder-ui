
// snack-bar.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxsModule } from '@ngxs/store';

import { SnackbarComponent } from './snackbar.component';
import { SnackBarState } from './snackbar.state';

@NgModule({
  declarations: [SnackbarComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    NgxsModule.forFeature([SnackBarState])
  ],
  exports: [SnackbarComponent]
})
export class SnackbarModule { }
