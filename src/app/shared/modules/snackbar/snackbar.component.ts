
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackBarStateModel } from './snackbar.state';
import { Store } from '@ngxs/store';
import { DismissSnackBar } from './snackbar.actions';


@Component({
  selector: 'pm-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: SnackBarStateModel,
    private snackBarRef: MatSnackBarRef<SnackbarComponent>,
    private store: Store,
  ) {}

  public dismiss(): void {
    console.log('dismiss')
    // this.store.dispatch(new DismissSnackBar)
    this.snackBarRef.dismiss();
    
  }


}
