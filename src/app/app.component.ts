import { Component } from '@angular/core';
import { PetRoute, getPetRoute } from './shared/utils/routes/routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public loading: boolean;
  public title = 'Pet Minder';
  
  public get petRoute(): typeof PetRoute {
    return PetRoute; 
  }
  
  constructor(private _router: Router) {
    this.loading = false
  }
  
  public getPetRoute(route: PetRoute): string {
    return getPetRoute(route);
  }

}
