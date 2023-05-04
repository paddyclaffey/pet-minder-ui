import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserState } from "src/app/modules/login/states/stores/login.state";
import { IUser } from "src/app/shared/models/User";

@Injectable()
  export class RegisterGuard implements CanActivate {

    @Select(UserState.user) private _user$: Observable<IUser>;

    constructor(private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> {
      return this._user$.pipe(map(user => {
        const hasToken: boolean = !!(user?.access_token);

        if (hasToken) {
            this.router.navigate(['/']);
        } else {
            return true;
        }
      }));
    }
  }
  