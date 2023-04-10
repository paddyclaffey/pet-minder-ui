import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, ] ], // Validators.email]],
      dob: ['', [Validators.required, ] ], // this.minAgeValidator(16)]],
      gender: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onCancel() {
    console.log(this.registerForm.value);
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  minAgeValidator(minAge: number) {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value) {
        const today = new Date();
        const birthDate = new Date(control.value);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        if (age < minAge) {
          return { minAge: true };
        }
      }
      return null;
    };
  }
}
