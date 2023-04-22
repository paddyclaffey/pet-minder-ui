import { Injectable, OnInit } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { UserState } from 'src/app/modules/login/states/stores/login.state';
import { IUser } from '../models/User';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { Router } from '@angular/router';

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
      url: `http://localhost:8080/${req.url}`
    });
    if (this.user?.access_token) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${this.user?.access_token}`),
      });
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}