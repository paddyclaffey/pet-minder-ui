import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  constructor(private store: Store,
              private fb: FormBuilder,
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
    //  this.store.dispatch(new Login(this.form.getRawValue())).pipe(take(1)).subscribe((data) => {
    //     this.router.navigate(['/admin']);
    //  });
     console.log('dispatch')
    }

}
