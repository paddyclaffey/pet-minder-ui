import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnDestroyMixin } from '@w11k/ngx-componentdestroyed';
import { IPet } from '../pet.model';

@Injectable()
export class PetService extends OnDestroyMixin {

  private url = 'pet';

  constructor(private _http: HttpClient) {
    super();
  }

  public getPets(): Observable<IPet[]> {
    return this._http.get<IPet[]>(`${this.url}`);
  }

  public createPet(pet: IPet): Observable<IPet> {
    return this._http.post<IPet>(`${this.url}`, pet);
  }

  public deletePet(pet: IPet): Observable<IPet> {
    return this._http.delete<IPet>(`${this.url}/${pet.id}`);
  }
}
