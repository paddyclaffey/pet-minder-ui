import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState } from 'src/app/modules/login/states/stores/login.state';
import { Observable, of } from 'rxjs';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store) {}

  canActivate(): Observable<any> {
    return of(true); //this.store.select('true'); //AuthState.token);
  }

}
