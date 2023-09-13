import {User} from "firebase/auth";

export type AuthValues = {
    email: string;
    password: string;
    displayName: string;
    redirectToHome: () => void;
};

export type ProjectValues = {
    user?: User | null;
    title: string | null;
    description: string | null;
}