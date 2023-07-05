import {firebaseAuth} from "../firebase.ts";
import {FC, ReactNode, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth";

type Children = {
    children: ReactNode;
}
export const PrivateRoute: FC<Children> = ({children}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const userIsExist = onAuthStateChanged(firebaseAuth, (user) => {
            if (!user) return navigate('/');
        })
        return (): void => userIsExist();
    }, [])

    return children;
};

