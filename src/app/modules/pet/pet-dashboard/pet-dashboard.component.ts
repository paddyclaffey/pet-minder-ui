import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet-service/pet.service';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { IPet } from '../pet.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'pm-pet-dashboard',
  templateUrl: './pet-dashboard.component.html',
  styleUrls: ['./pet-dashboard.component.scss']
})
export class PetDashboardComponent extends OnDestroyMixin implements OnInit {

  public pets: IPet[];
  public loading: boolean;

  constructor(private petService: PetService) {
    super();
    this.pets = [];
    this.loading = true;
  }

  ngOnInit(): void {
    this.petService.getPets().pipe(take(1), untilComponentDestroyed(this)).subscribe(
      pets => {
        this.pets = pets;
        this.loading = false;
      },
      error => {
        console.error(error);
        this.loading = false;
      })
  }

}
