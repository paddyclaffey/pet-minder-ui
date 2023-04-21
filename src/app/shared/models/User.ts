
export interface IUser extends IUserCredentials {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  dob: Date;
  roles: string[];
}


export interface IUserCredentials {
  username: string;
  password?: string;

  access_token?: string;
}
