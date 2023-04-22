import { IUser, IUserCredentials } from "src/app/shared/models/User";

export namespace LoginActions {
  export class Login {
    static readonly type = '[Auth] Login';
    constructor(public payload: IUser) {}
  }

  export class Logout {
    static readonly type = '[Auth] Logout';
  }

  export class SetToken  {
    static readonly type = '[Auth] Set Token';
    constructor(public payload: string) {}
  }

  export class LoadUserStateFromStorage  {
    static readonly type = '[Auth] Load User State';
  }
}