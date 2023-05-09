import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../pet-service/pet.service';
import { PetRoute, getPetRoute } from 'src/app/shared/utils/routes/routes';
import { IPet } from '../pet.model';
import { IPetSchedule, IPetScheduleRequest } from '../scheduel/schedule.model';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { take } from 'rxjs/operators';

@Component({
  selector: 'pm-pet-create',
  templateUrl: './pet-create-schedule.component.html',
  styleUrls: ['./pet-create-schedule.component.scss']
})
export class PetCreatesSheduleComponent extends OnDestroyMixin implements OnInit {

  // @Input() pet: IPet;

  petScheduleForm: FormGroup;
  pet: IPet;

  constructor(
    private fb: FormBuilder,
    private petService: PetService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    super();
    this.createPetScheduleForm();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(untilComponentDestroyed(this)).subscribe(params => {
      const petId = parseInt(params.get('petId'), 10);
      
      this.petService.getPet(petId).pipe(take(1), untilComponentDestroyed(this)).subscribe(pet => {
        this.pet = pet;
      });
    });
  }
  
  createPetScheduleForm() {
    this.petScheduleForm = this.fb.group({
      category: ['', Validators.required],
      startTime: ['', Validators.required],
      frequency: this.fb.group({
        hours: ['', Validators.required],
        minutes: ['', Validators.required]
      }),
      active: [true, Validators.required],
      description: ['']
    });
    this.setRandomPetScheduleData();
  }

  createPetSchedule(): void {
    if (this.petScheduleForm.valid) {
      const schedule: IPetSchedule = this.petScheduleForm.value;
      schedule.petId = this.pet.id;
      this.petService.createPetSchedule(schedule).pipe(take(1), untilComponentDestroyed(this)).subscribe(() => {
        this.router.navigate([getPetRoute(PetRoute.DASHBOARD)]);
      });
    }
  }

  setRandomPetScheduleData() {
    const randomOptions = [
      {
        category: 'Feeding',
        startTime: '08:00',
        frequencyIntervalHours: 12,
        frequencyIntervalMinutes: 12,
        active: true,
        description: 'Feed Toby in the morning',
      },
      {
        category: 'Walking',
        startTime: '09:00',
        frequencyIntervalHours: 2,
        frequencyIntervalMinutes: 12,
        active: true,
        description: 'Take Max for a walk',
      },
      {
        category: 'Medication',
        startTime: '14:00',
        frequencyIntervalHours: 10,
        frequencyIntervalMinutes: 20,
        active: true,
        description: 'Give Bella her medication',
      },
      {
        category: 'Feeding',
        startTime: '18:00',
        frequencyIntervalHours: 7,
        frequencyIntervalMinutes: 7,
        active: true,
        description: 'Feed Luna in the evening',
      },
      {
        category: 'Grooming',
        startTime: '16:00',
        frequencyIntervalHours: 5,
        frequencyIntervalMinutes: 20,
        active: true,
        description: 'Groom Milo',
      },
    ];
  
    const randomIndex = Math.floor(Math.random() * randomOptions.length);
    const randomData = randomOptions[randomIndex];
  
    this.petScheduleForm.patchValue({
      category: randomData.category,
      startTime: randomData.startTime,
      active: randomData.active,
      description: randomData.description,
    });
    const frequencyForm = this.petScheduleForm.get('frequency') as FormGroup;
    frequencyForm.patchValue({
      hours: randomData.frequencyIntervalHours,
      minutes: randomData.frequencyIntervalMinutes
    });
  }
  
  

}
