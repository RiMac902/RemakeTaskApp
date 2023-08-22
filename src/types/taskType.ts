import {User} from "firebase/auth";


export enum AccessLevel {
    Read = 'read',
    Edit = 'edit',
    Comment = 'comment',
}


export interface ITaskType {
    title: string;
    description: string;
    createdBy: User | null;
    assignedUsers?: User[];
    permissions?: {
        [AccessLevel.Read]: User[],
        [AccessLevel.Edit]: User[],
        [AccessLevel.Comment]: User[],
    };
    createdAt?: string;
    updatedAt?: string;
    isLoading: boolean;
    error: string | null;
}

export interface TaskArgs {
    user: User | null;
    title: string;
    description: string;
    assignedUsers?: User[];
    permissions?: {
        [AccessLevel.Read]: User[];
        [AccessLevel.Edit]: User[];
        [AccessLevel.Comment]: User[];
    };
}