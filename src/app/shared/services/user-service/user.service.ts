import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnDestroyMixin } from '@w11k/ngx-componentdestroyed';
import { IUser } from '../../models/User';
import { Store } from '@ngxs/store';


@Injectable()
export class UserService extends OnDestroyMixin {

    private readonly _URL = 'users/';

    constructor(private _http: HttpClient, private _store: Store) {
        super();
    }

    public getUserDetails(userName: string): Observable<IUser> {
        return this._http.get<IUser>(`${this._URL}username/${userName}`);
    }

}
