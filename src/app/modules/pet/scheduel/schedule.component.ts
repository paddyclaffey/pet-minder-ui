import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPet } from '../pet.model';
import { PetService } from '../pet-service/pet.service';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { take } from 'rxjs/operators';
import { IPetSchedule } from './schedule.model';

@Component({
  selector: 'pm-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent extends OnDestroyMixin implements OnInit {
  
  @Input() schedules: IPetSchedule[];
  @Output('refresh') refresh$ = new EventEmitter<void>();
  
  public loading: boolean;

  constructor(private petService: PetService) {
    super();
    this.loading = false;
  }

  ngOnInit(): void {
  }

  edit(petSchedule: IPetSchedule): void {
    console.log('edit', petSchedule)
  }

  delete(petSchedule: IPetSchedule): void {
    this.petService.deletePetSchedule(petSchedule.id).pipe(take(1), untilComponentDestroyed(this)).subscribe(
      res => {
        console.log(res);
        this.refresh$.emit();
      },
      err => {
        console.error(err);
      }
    )
    this.loading = true;
  }

}
