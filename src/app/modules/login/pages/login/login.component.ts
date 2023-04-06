import { Login } from './../../states/actions/login.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: UntypedFormGroup;
  constructor(private store: Store,
              private fb: UntypedFormBuilder,
              private router: Router) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.initForm();
  }

  // tslint:disable-next-line: typedef
  initForm() {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  // tslint:disable-next-line: typedef
  login() {
     this.store.dispatch(new Login(this.form.getRawValue())).pipe(take(1)).subscribe((data) => {
        console.log('dispatch')
        this.router.navigate(['/admin']);
     });
  }

}
