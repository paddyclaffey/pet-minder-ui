import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet-service/pet.service';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { IPet } from '../pet.model';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PetRoute, getPetRoute } from 'src/app/shared/utils/routes/routes';

@Component({
  selector: 'pm-pet-dashboard',
  templateUrl: './pet-dashboard.component.html',
  styleUrls: ['./pet-dashboard.component.scss']
})
export class PetDashboardComponent extends OnDestroyMixin implements OnInit {

  public pets: IPet[];
  public loading: boolean;

  
  constructor(private petService: PetService, private router: Router) {
    super();
    this.pets = [];
    this.loading = true;
  }

  ngOnInit(): void {
    this.fetchPets();
  }

  fetchPets(): void {
    this.petService.getPets().pipe(take(1), untilComponentDestroyed(this)).subscribe(
      pets => {
        this.pets = pets;
        console.log(this.pets)
        this.loading = false;
      },
      error => {
        console.error(error);
        this.loading = false;
      })
  }

  addPet(): void {
    this.router.navigate([getPetRoute(PetRoute.CREATE)]);
  }
  

}
