
export enum Route {
    PET = 'pet'
}

export enum PetRoute {
    VIEW = 'view' ,
    SHARK = 'view/shark' ,
    GIRAFFE = 'view/giraffe' 
}

export function getPetRoute(route: PetRoute): string {
    return `${Route.PET}/${route}`;
  }
  