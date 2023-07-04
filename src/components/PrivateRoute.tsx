import {onAuthStateChanged} from "firebase/auth";
import {firebaseAuth} from "../firebase.ts";
import {FC, ReactNode, useEffect} from "react";
import {useNavigate} from "react-router-dom";

type Props  = {
    children: ReactNode;
}

export const PrivateRoute: FC<Props> = ({children}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const userIsExist = onAuthStateChanged(firebaseAuth, (user)=>{
            if (user) {
                navigate('/home');
            }
            else {
                navigate('/');
            }
        })
        return ():void => userIsExist();
    }, [])

    return children;
};
