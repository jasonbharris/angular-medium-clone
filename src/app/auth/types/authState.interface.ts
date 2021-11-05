import { CurrentUserInterface } from "src/app/auth/shared/types/currentUser.interface";
import { BackendErrorsInterface } from "src/app/auth/shared/types/backendErrors.interface";

export interface AuthStateInterface {
    isSubmitting: boolean
    currentUser: CurrentUserInterface | null
    isLoggedIn: boolean | null
    validationErrors: BackendErrorsInterface | null
}