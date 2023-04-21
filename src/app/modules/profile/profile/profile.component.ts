import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
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
    //  this.store.dispatch(new Login(this.form.getRawValue())).pipe(take(1)).subscribe((data) => {
    //     this.router.navigate(['/admin']);
    //  });
     console.log('dispatch')
    }

}
