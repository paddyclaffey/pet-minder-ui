import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PetRoute, getPetRoute } from 'src/app/shared/utils/routes/routes';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
