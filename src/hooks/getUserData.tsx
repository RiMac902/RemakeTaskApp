import {useEffect, useState} from 'react';
import {User, Auth, onAuthStateChanged} from 'firebase/auth';

const useFetchUserData = (firebaseAuth: Auth) => {
    const [getUser, setUser] = useState<User>();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const listener = onAuthStateChanged(firebaseAuth, async (user: User | null) => {
            try {
                setLoading(true);
                if (user) setUser(user);
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        });
        return () => listener();
    }, [firebaseAuth]);

    return {getUser, isLoading, error: error || null};
};

export default useFetchUserData;