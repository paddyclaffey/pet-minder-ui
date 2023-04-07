import { Component } from '@angular/core';
import { PetRoute, getPetRoute } from './shared/utils/routes/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pet Minder';

  public get petRoute(): typeof PetRoute {
    return PetRoute; 
  }

  public getPetRoute(route: PetRoute): string {
    return getPetRoute(PetRoute.VIEW)
  }
}
