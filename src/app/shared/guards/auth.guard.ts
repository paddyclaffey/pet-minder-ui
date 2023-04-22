import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserState } from "src/app/modules/login/states/stores/login.state";
import { IUser } from "../models/User";

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {

    @Select(UserState.user) private _user$: Observable<IUser>;

    constructor(private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> {
      return this._user$.pipe(map(user => {
        const hasToken: boolean = !!(user?.access_token);

        console.log(user);
        if (hasToken) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false
        }
      }));
    }
  }
  