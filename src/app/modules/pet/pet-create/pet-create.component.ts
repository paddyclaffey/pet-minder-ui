import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PetService } from '../pet-service/pet.service';

@Component({
  selector: 'pm-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.scss']
})
export class PetCreateComponent implements OnInit {

  petForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private petService: PetService,
    private router: Router) { }

  ngOnInit(): void {
    this.petForm = this.fb.group({
      name: ['', Validators.required],
      breed: ['', Validators.required],
      type: ['', Validators.required],
      age: ['', Validators.required],
      colour: ['', Validators.required],
      size: ['', Validators.required]
    });
  }

  createPet(): void {
    if (this.petForm.valid) {
      const newPet = this.petForm.value;
      this.petService.createPet(newPet).subscribe(() => {
        this.router.navigate(['/pets']);
      });
    }
  }

}
