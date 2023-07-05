import {useEffect, useState} from "react";
import {onAuthStateChanged, User} from "firebase/auth";
import {firebaseAuth} from "../firebase.ts";

export function useAuth() {
    const [currentUser, setCurrentUser] = useState<User | null>();

    useEffect(() => {
        const unsub = onAuthStateChanged(firebaseAuth, user => setCurrentUser(user));
        return unsub;
    }, [])

    return currentUser;
}