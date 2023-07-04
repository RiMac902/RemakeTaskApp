import {onAuthStateChanged} from "firebase/auth";
import {firebaseAuth} from "../firebase.ts";
import {FC, ReactNode, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import useFetchUserData from "../hooks/getUserData.tsx";

type Props = {
    children: ReactNode;
}

export const PrivateRoute: FC<Props> = ({children}) => {
    const navigate = useNavigate();
    const {getUser, isLoading, error} = useFetchUserData(firebaseAuth);

    useEffect(() => {
        if (isLoading) {
            if (getUser) {
                navigate('/home');
            } else {
                navigate('/');
            }
        }
        if (error) alert(error);
    }, [isLoading, getUser, navigate, error]);

    return children;
};
