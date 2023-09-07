import {User} from "firebase/auth";

export interface UploadAvatar {
    file: File | null,
    user: User | null,
}