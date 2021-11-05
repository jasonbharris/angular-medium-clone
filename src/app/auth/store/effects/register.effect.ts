import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { registerAction, registerFailureAction, registerSuccessAction } from "src/app/auth/store/actions/register.action";
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

import { AuthService } from "src/app/auth/services/auth.service";
import { CurrentUserInterface } from "src/app/auth/shared/types/currentUser.interface";

@Injectable()
export class RegisterEffect {
    register$ = createEffect(() => this.actions$.pipe(
        ofType(registerAction),
        switchMap(({ request }) => {
            return this.authService.register(request).pipe(
                map((currentUser: CurrentUserInterface) => {
                    return registerSuccessAction({ currentUser });
                }),
                catchError((errorResponse: HttpErrorResponse) => {
                    return of(registerFailureAction({errors: errorResponse.error.errors}));
                })
            );
        })
    ))

    constructor(private actions$: Actions, private authService: AuthService) {}
}