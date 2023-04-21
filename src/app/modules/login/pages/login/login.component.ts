import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first, take } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { LoginService } from 'src/app/core/services/login.service';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { LoginActions } from '../../states/actions/login.actions';

// import { AccountService, AlertService } from '../_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends OnDestroyMixin {
error
  public form: FormGroup;
  
  constructor (private _store: Store,
              private _router: Router,
              private _loginService: LoginService) {
    super();
    this.form = new FormGroup({
      username: new FormControl('admin'),
      password: new FormControl('petminder'),
    });
  }

  public submit() {
    if (this.form.valid) {
      console.log('submit')
      this._loginService.login(this.form.value).pipe(take(1), untilComponentDestroyed(this)).subscribe(
        user => {
          console.log('logged In', user);
          this._store.dispatch(new LoginActions.Login(user))
          this._router.navigate(['/']);
        },
        err => {
          console.log(err)
        })
    }
  }}
