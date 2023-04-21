
export enum Route {
    PET = 'pet',
    PROFILE = 'profile',
}

export enum PetRoute {
    VIEW = 'view' ,
    SHARK = 'view/shark' ,
    GIRAFFE = 'view/giraffe' 
}

export enum ProfileRoute {
}

export function getPetRoute(route: PetRoute): string {
    return `${Route.PET}/${route}`;
  }
  