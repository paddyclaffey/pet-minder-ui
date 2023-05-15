import { Component, OnInit } from '@angular/core';
import { Action, MainActions } from '../action/action.model';
import { PetRoute, Route, getPetRoute } from 'src/app/shared/utils/routes/routes';
import { PetService } from 'src/app/modules/pet/pet-service/pet.service';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { catchError, map, take, tap } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { ShowSuccessMessage } from 'src/app/shared/modules/snackbar/snackbar.actions';
import { WebSocketService } from 'src/app/shared/services/websocket-service/websocket.service';

@Component({
  selector: 'pm-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends OnDestroyMixin implements OnInit {
  
  public actions: Action[];

  constructor(private _petService: PetService,
              private store: Store) {
    super();
    this.actions = [
      { title: MainActions.VIEW_PETS, url: getPetRoute(PetRoute.DASHBOARD), action: 'View' },
      { title: MainActions.CREATE_PETS, url: getPetRoute(PetRoute.CREATE), action: 'Create' },
      // { title: 'Action 2', url: '/action-2' },
      // { title: 'Action 3', url: '/action-3' }
    ];
  }

  ngOnInit(): void {
    this._petService.getPets().pipe(take(1), untilComponentDestroyed(this)).subscribe(pets => {
      if (!pets?.length) {
        // MainActions
      }
    });
  }

  show() {
    this.store.dispatch(new ShowSuccessMessage("test"));
  }

}
