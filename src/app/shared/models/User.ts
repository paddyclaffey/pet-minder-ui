
export interface IUser extends IUserCredentials {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  dob: Date;
  roles: string[];
}


export interface IUserCredentials {
  username: string;
  email: string;
  password?: string;

  access_token?: string;
}
