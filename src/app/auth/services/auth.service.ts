import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

import { RegisterRequestInterface } from "src/app/auth/types/registerRequest.interface";
import { CurrentUserInterface } from "src/app/auth/shared/types/currentUser.interface";
import { environment } from "src/environments/environment";
import { AuthResponseInterface } from "src/app/auth/types/authResponse.interface";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}
    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = environment.apiUrl + '/users'
        
        return this.http.post<AuthResponseInterface>(url, data).pipe(map((response: AuthResponseInterface) => response.user))
    }
}