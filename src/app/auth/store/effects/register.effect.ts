import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { registerAction, registerFailureAction, registerSuccessAction } from "src/app/auth/store/actions/register.action";
import { catchError, map, switchMap } from 'rxjs/operators'

import { AuthService } from "src/app/auth/services/auth.service";
import { CurrentUserInterface } from "src/app/auth/shared/types/currentUser.interface";
import { of } from "rxjs";

@Injectable()
export class RegisterEffect {
    register$ = createEffect(() => this.actions$.pipe(
        ofType(registerAction),
        switchMap(({ request }) => {
            return this.authService.register(request).pipe(
                map((currentUser: CurrentUserInterface) => {
                    return registerSuccessAction({ currentUser });
                }),
                catchError(() => {
                    return of(registerFailureAction());
                })
            );
        })
    ))

    constructor(private actions$: Actions, private authService: AuthService) {}
}