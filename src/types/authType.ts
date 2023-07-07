import {IUser} from "./userType.ts";

export interface SignUpCredentials {
    email: string;
    password: string;
    displayName: string;
    redirectToHome?: () => void;
}

export interface SignInCredentials {
    email: string;
    password: string;
    redirectToHome?: () => void;
}

export interface AuthState {
    user: IUser | null;
    isLoading: boolean;
    error: string | null;
}

