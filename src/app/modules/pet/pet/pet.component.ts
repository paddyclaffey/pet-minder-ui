import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPet } from '../pet.model';
import { PetService } from '../pet-service/pet.service';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PetRoute, getPetRoute } from 'src/app/shared/utils/routes/routes';

@Component({
  selector: 'pm-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent extends OnDestroyMixin implements OnInit {
  
  @Input() pet: IPet;
  @Output() petChaged = new EventEmitter<void>();
  
  public loading: boolean;

  constructor(private petService: PetService, private router: Router) {
    super();
    this.loading = false;
  }

  ngOnInit(): void {
  }

  edit(pet: IPet): void {
    console.log('edit', pet)
  }

  createSchedule(pet: IPet): void {
    this.router.navigate([getPetRoute(PetRoute.CREATE_SCHEDULE), pet.id]);
  }

  deletePet(pet: IPet): void {
    this.loading = true;
    this.petService.deletePet(pet).pipe(take(1), untilComponentDestroyed(this)).subscribe(
      res => {
        console.log(res);
        this.loading = false;
        this.petChaged.emit();
      },
      err => {
        this.loading = false;
        console.error(err);

      }
    )
  }

}
