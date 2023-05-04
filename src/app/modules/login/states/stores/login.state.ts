import { LoginActions } from './../actions/login.actions';
import { State, Selector, StateContext, Action, NgxsOnInit } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { IUser, } from 'src/app/shared/models/User';
import { Route } from 'src/app/shared/utils/routes/routes';
import { Router } from '@angular/router';

export class UserStateModel implements IUser {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  dob: Date;
  roles: string[];

  access_token?: string;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    id: null,
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    dob: null,
    roles: [],

    access_token: '',
  }
})
@Injectable({
  providedIn: 'root'
})
export class UserState {

  @Selector()
  static user(state: UserStateModel) { return state; }

  constructor(private _router: Router) { }

  @Action(LoginActions.Login)
  login(ctx: StateContext<UserStateModel>, action: LoginActions.Login) {
    const state = ctx.getState();
    ctx.setState({ ...state, ...action.payload });
  }

  @Action(LoginActions.SetToken)
  setToken(ctx: StateContext<UserStateModel>, action: LoginActions.SetToken) {
    const state = ctx.getState();
    ctx.setState({ ...state, access_token: action.payload });
  }

  @Action(LoginActions.Logout)
  logout(ctx: StateContext<UserStateModel>, action: LoginActions.SetToken) {
    ctx.setState(null);
  }

}
