import { Injectable, OnInit } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { UserState } from 'src/app/modules/login/states/stores/login.state';
import { IUser } from '../models/User';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { tap } from 'rxjs/operators';
import { ShowErrorMessage, ShowSuccessMessage } from '../modules/snackbar/snackbar.actions';

@Injectable()
export class PmHttpInterceptor extends OnDestroyMixin implements OnInit, HttpInterceptor {

  private user: IUser;

  constructor(private store: Store) {
    super();
    this.store.select(UserState.user).subscribe(user => {
      console.log('User changed:', user);
      this.user = user;
    });
  }

  ngOnInit(): void {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      url: `${environment.host}${req.url}`
    });

    if (this.user?.access_token) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${this.user?.access_token}`),
      });
      req = authReq;
    }

    // Intercept POST, PUT, and DELETE requests
    if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
      return next.handle(req).pipe(
        tap(
          event => {
            this.store.dispatch(new ShowSuccessMessage("Success"));
          },
          error => {
            if (error instanceof HttpErrorResponse) {
              // Handle error logic here
              console.log('Request error:', error);
              this.store.dispatch(new ShowErrorMessage("Error"));
            }
          }
        )
      );
    }

    return next.handle(req);
  }
}
