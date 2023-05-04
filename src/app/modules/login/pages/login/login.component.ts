import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { LoginActions } from '../../states/actions/login.actions';
import { LoginService } from 'src/app/shared/services/login-service/login.service';
import { Route } from 'src/app/shared/utils/routes/routes';


@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends OnDestroyMixin {
  error
  public form: FormGroup;

  constructor(private _store: Store,
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
      this._loginService.login(this.form.value).pipe(take(1), untilComponentDestroyed(this)).subscribe(
        user => {
          this._store.dispatch(new LoginActions.Login(user))
          this._router.navigate(['/']);
        },
        err => {
          console.log(err)
        })
    }
  }

  public goToRegister(): void {
    this._router.navigate([Route.REGISTER]);
  }
}
