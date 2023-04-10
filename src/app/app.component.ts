import { Component } from '@angular/core';
import { PetRoute, getPetRoute } from './shared/utils/routes/routes';
import { Router } from '@angular/router';

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
  
  constructor(private _router: Router) {}
  
  public getPetRoute(route: PetRoute): string {
    return getPetRoute(route);
  }

  public goToUrl(url: string) {
    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this._router.navigate([url]);
    });
  }
}
