import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { reducers } from "src/app/auth/store/reducers";
import { AuthService } from "src/app/auth/services/auth.service";
import { RegisterEffect } from "src/app/auth/store/effects/register.effect";


const routes = [
    {
        path: 'register',
        component: RegisterComponent
    }
]

@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule, 
        RouterModule.forChild(routes), 
        ReactiveFormsModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([RegisterEffect])
    ],
    providers: [AuthService]
})
export class AuthModule {}