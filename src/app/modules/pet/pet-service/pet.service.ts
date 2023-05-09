import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnDestroyMixin } from '@w11k/ngx-componentdestroyed';
import { IPet } from '../pet.model';
import { IPetSchedule } from '../scheduel/schedule.model';

@Injectable()
export class PetService extends OnDestroyMixin {

  private url = 'pet';

  constructor(private _http: HttpClient) {
    super();
  }

  public getPets(): Observable<IPet[]> {
    return this._http.get<IPet[]>(`${this.url}`);
  }


  public getPet(petId: number): Observable<IPet> {
    return this._http.get<IPet>(`${this.url}/${petId}`);
  }

  public createPet(pet: IPet): Observable<IPet> {
    return this._http.post<IPet>(`${this.url}`, pet);
  }

  public deletePet(pet: IPet): Observable<IPet> {
    return this._http.delete<IPet>(`${this.url}/${pet.id}`);
  }

  public createPetSchedule(petSchedule: IPetSchedule): Observable<IPetSchedule> {
    return this._http.post<IPetSchedule>(`pet-schedule`, petSchedule);
  }

  public deletePetSchedule(petId: number): Observable<number> {
    return this._http.delete<number>(`pet-schedule/${petId}`);
  }
}
