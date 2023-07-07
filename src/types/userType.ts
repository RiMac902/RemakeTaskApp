import {User} from "firebase/auth";

export interface IUser {
    email: string;
    password: string;
    displayName?: string;
    avatar?: string;
}

export interface UploadAvatar {
    file: File,
    user: User,
}