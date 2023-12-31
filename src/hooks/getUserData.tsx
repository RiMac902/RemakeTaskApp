import {useEffect, useState} from 'react';
import {User, Auth, onAuthStateChanged} from 'firebase/auth';

// const useFetchUserData = (firebaseAuth: Auth) => {
//     const [getUser, setUser] = useState<User | null>(null);
//     const [isLoading, setLoading] = useState<boolean>(false);
//     const [error, setError] = useState<string>('');
//
//     useEffect(() => {
//         const listener = onAuthStateChanged(firebaseAuth, async (user: User | null) => {
//             try {
//                 setLoading(true);
//                 if (user) {
//                     setUser(user);
//                 } else {
//                     setUser(null);
//                 }
//             } catch (error: any) {
//                 setError(error.message)
//             } finally {
//                 setLoading(false)
//             }
//         });
//         return () => listener();
//     }, [firebaseAuth]);
//
//     return {getUser, isLoading, error: error || null};
// };
//
// export default useFetchUserData;

const useFetchUserData = (firebaseAuth: Auth) => {
    const [getUser, setUser] = useState<User | null>(null);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const user = await new Promise<User | null>((resolve, reject) => {
                    const listener = onAuthStateChanged(firebaseAuth, (user: User | null) => {
                        resolve(user);
                    }, reject);
                    return () => listener();
                });
                if (user) {
                    setUser(user);
                } else {
                    setUser(null);
                }
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [firebaseAuth]);

    return { getUser, isLoading, error: error || null };
};

export default useFetchUserData;