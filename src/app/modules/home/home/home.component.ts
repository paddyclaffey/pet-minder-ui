import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { PetRoute, Route, getPetRoute } from 'src/app/shared/utils/routes/routes';
import { LoginActions } from '../../login/states/actions/login.actions';
import { WebSocketService } from 'src/app/shared/services/websocket-service/websocket.service';
import { OnDestroyMixin } from '@w11k/ngx-componentdestroyed';

@Component({
  selector: 'pm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends OnDestroyMixin implements OnInit, OnDestroy {

  title = 'Pet Minder';
  
  public get petRoute(): typeof PetRoute {
    return PetRoute; 
  }
  
  constructor(private _router: Router,
              private _store: Store,
              private websocketService: WebSocketService) {
                super();
  }

  ngOnInit(): void {
  }

  connect () {
    this.websocketService.connect();
    
  }
  
  ngOnDestroy() {
    this.websocketService.disconnect();
  }

  sendMessage() {
    this.websocketService.sendMessage('Hello, world!');
  }
  
  public getPetRoute(route: PetRoute): string {
    return getPetRoute(route);
  }

  public logout(): void {
    this._store.dispatch(new LoginActions.Logout());
    this._router.navigate([Route.LOGIN]);
  }
}
