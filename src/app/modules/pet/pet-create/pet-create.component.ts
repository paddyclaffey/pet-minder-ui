import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PetService } from '../pet-service/pet.service';
import { PetRoute, getPetRoute } from 'src/app/shared/utils/routes/routes';

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
      dob: ['', Validators.required],
      colour: ['', Validators.required],
      size: ['', Validators.required]
    });
    this.setData();
  }

  createPet(): void {
    if (this.petForm.valid) {
      const newPet = this.petForm.value;
      this.petService.createPet(newPet).subscribe(() => {
        this.router.navigate([getPetRoute(PetRoute.DASHBOARD)]);
      });
    }
  }

  setData() {
    const randomOptions = [
      {
        name: 'Toby',
        breed: 'Bichon Frise',
        type: 'DOG',
        dob: '1993-01-15',
        colour: 'White',
        size: 'Small',
      },
      {
        name: 'Max',
        breed: 'Labrador Retriever',
        type: 'DOG',
        dob: '2015-06-10',
        colour: 'Black',
        size: 'Large',
      },
      {
        name: 'Bella',
        breed: 'Golden Retriever',
        type: 'DOG',
        dob: '2018-12-25',
        colour: 'Gold',
        size: 'Large',
      },
      {
        name: 'Luna',
        breed: 'French Bulldog',
        type: 'DOG',
        dob: '2019-10-02',
        colour: 'Brindle',
        size: 'Medium',
      },
      {
        name: 'Milo',
        breed: 'Poodle',
        type: 'DOG',
        dob: '2017-05-18',
        colour: 'Cream',
        size: 'Medium',
      },
    ];
    

    const randomIndex = Math.floor(Math.random() * randomOptions.length);
    const randomData = randomOptions[randomIndex];

    this.petForm = this.fb.group({
      name: [randomData.name, Validators.required],
      breed: [randomData.breed, Validators.required],
      type: [randomData.type, Validators.required],
      dob: [randomData.dob, Validators.required],
      colour: [randomData.colour, Validators.required],
      size: [randomData.size, Validators.required]
      })
      
  }

}
