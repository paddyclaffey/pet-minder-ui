
// snack-bar.state.ts
import { State, Action, StateContext } from '@ngxs/store';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { DismissSnackBar, ShowErrorMessage, ShowSuccessMessage, ShowWarningMessage } from './snackbar.actions';
import { Injectable } from '@angular/core';
import { SnackbarComponent } from './snackbar.component';

export interface SnackBarStateModel<T = SnackbarComponent> {
  message: string;
  snackbarRef: MatSnackBarRef<T>;
}

@State<SnackBarStateModel>({
  name: 'snackBar',
  defaults: {
    message: '',
    snackbarRef: null,
  }
})
@Injectable()
export class SnackBarState {
  
  private durationInSeconds: number;

  private snackbarRef: MatSnackBarRef<SnackbarComponent>;

  constructor(private snackBar: MatSnackBar) {
    this.durationInSeconds = 8;
  }

  @Action(ShowSuccessMessage)
  showSnackBar(ctx: StateContext<SnackBarStateModel>, action: ShowSuccessMessage) {
    const state = ctx.getState();
    const snackbarRef = this.snackBar.openFromComponent(SnackbarComponent, {
      data: { message: action.message },
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top',
      panelClass: ['snackbar-success'],
    });
    this.snackbarRef = snackbarRef;
    console.log('success sna');

    ctx.patchState({ message: action.message, snackbarRef });
  }
  
  @Action(ShowWarningMessage)
  showWarning(ctx: StateContext<SnackBarStateModel>, action: ShowWarningMessage) {
    const state = ctx.getState();
    const snackbarRef = this.snackBar.openFromComponent(SnackbarComponent, {
      data: { message: action.message },
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top',
      panelClass: ['snackbar-warning'],
    });
    this.snackbarRef = snackbarRef;
    console.log('warning sna');
    ctx.patchState({ message: action.message, snackbarRef });
  }
  
  @Action(ShowErrorMessage)
  showError(ctx: StateContext<SnackBarStateModel>, action: ShowErrorMessage) {
    const state = ctx.getState();
    const snackbarRef = this.snackBar.openFromComponent(SnackbarComponent, {
      data: { message: action.message },
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top',
      panelClass: ['snackbar-error'],
    });
    console.log('err snack');
    this.snackbarRef = snackbarRef;
    ctx.patchState({ message: action.message, snackbarRef });
  }

  @Action(DismissSnackBar)
  dismissSnackBar(ctx: StateContext<SnackBarStateModel>, action: ShowErrorMessage) {
    ctx.getState().snackbarRef.dismiss();
    console.log('dismiss');
    this.snackbarRef?.dismiss();
  }
}
