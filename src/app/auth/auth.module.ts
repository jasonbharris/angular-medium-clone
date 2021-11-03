import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { RegisterComponent } from "src/app/auth/components/register/register.component";

const routes = [
    {
        path: 'register',
        component: RegisterComponent
    }
]

@NgModule({
    declarations: [RegisterComponent],
    imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule]
})
export class AuthModule {}