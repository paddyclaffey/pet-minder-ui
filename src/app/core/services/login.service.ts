import { IUser, IUserCredentials } from './../../shared/models/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { Store } from '@ngxs/store';
import { LoginActions } from 'src/app/modules/login/states/actions/login.actions';
@Injectable({
  providedIn: 'root'
})
export class LoginService extends OnDestroyMixin {

  // const URL = 'http://localhost:3000';
  private url = 'api/';

  constructor(private _http: HttpClient, private _store: Store) {
    super();
  }

  login(user: IUserCredentials): Observable<IUser> {
    const user$: Subject<IUser> = new Subject();
    this._http.post<IUserCredentials>(`${this.url}login`, user).pipe(take(1), untilComponentDestroyed(this)).subscribe(response => {
      this._store.dispatch(new LoginActions.SetToken(response.access_token));
      return this.getUser(user.username).pipe(take(1), untilComponentDestroyed(this)).subscribe(res => {
        res.access_token = response.access_token
        user$.next(res);
      });
    });

    return user$;
  }

  getUser(username: string): Observable<IUser> {
    return this._http.get<IUser>(`${this.url}users/${username}`);
  }
}
