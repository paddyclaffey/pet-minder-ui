import { LoginActions } from './../actions/login.actions';
import { State, Selector, StateContext, Action, NgxsOnInit } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { IUser, } from 'src/app/shared/models/User';
import { NgxsStoragePlugin } from '@ngxs/storage-plugin';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

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
export class UserState implements NgxsOnInit {

  @Selector()
  static user(state: UserStateModel) { return state; }

  constructor() {}
  
  ngxsOnInit(ctx: StateContext<UserStateModel>) {
    const user = {
      access_token: "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2xvZ2luIiwic3ViIjoiYWRtaW4iLCJleHAiOjE2ODIxOTc2MjQsImlhdCI6MTY4MjExMTIyNCwicm9sZXMiOltdfQ._gxQgTI7OCaINh7lUqHcOnXSILR27hB8_YNqEAGJIgc",
      address: "office",
      dob: null,
      email: "admin@petminder.com",
      firstName: "Admin",
      id: 1,
      lastName: "lastname",
      password: "$2a$12$BGDYXrP4TTLhe58I/4G2QuUXJiEnLW8CG46uyu3D2kyVWqp1jgCU6",
      roles: [],
      username: "admin",
    };
    console.log(1, this);
    return of(user).pipe(tap(user => {
      console.log(2);
          ctx.patchState(user);
        })
      );
  }

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
  logout({ setState, getState }: StateContext<UserStateModel>) {
    const { access_token } = getState();
    setState(null);
  }

}
