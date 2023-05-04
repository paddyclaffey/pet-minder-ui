import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { PetRoute, Route, getPetRoute } from 'src/app/shared/utils/routes/routes';
import { LoginActions } from '../../login/states/actions/login.actions';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title = 'Pet Minder';
  
  public get petRoute(): typeof PetRoute {
    return PetRoute; 
  }
  
  constructor(private _router: Router, private _store: Store) {}
  
  public getPetRoute(route: PetRoute): string {
    return getPetRoute(route);
  }

  public logout(): void {
    this._store.dispatch(new LoginActions.Logout());
    this._router.navigate([Route.LOGIN]);
  }
}
