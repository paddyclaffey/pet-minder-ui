
export enum Route {
    PET = 'pet',
    PROFILE = 'profile',
    REGISTER = 'register',
    LOGIN = 'login',
}

export enum PetRoute {
    VIEW = '', // path variable
    VIEW_ALL = 'all',
    CREATE = 'create',
}

export enum ProfileRoute {
}

export function getPetRoute(route: PetRoute): string {
    return `${Route.PET}/${route}`;
  }
  

  export type Routes = Route | PetRoute | ProfileRoute;
