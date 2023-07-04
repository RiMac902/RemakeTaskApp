import React, {useEffect, useState} from 'react';
import {deepOrange, grey, indigo} from "@mui/material/colors";
import {Avatar, Button, Paper, Skeleton, Stack} from "@mui/material";
import {signOutAccount} from "../store/features/authSlice.ts";
import {useAppDispatch} from "../hooks/reduxHooks.ts";
import {avatarWord} from "../helpers/avatarWord.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth";
import {firebaseAuth} from "../firebase.ts";

const Header = () => {
    const [userName, setUserName] = useState<String>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const goToProfilePage = () => {
        navigate('/profile')
    }

    const userIsExist = () => {
        try {
            onAuthStateChanged(firebaseAuth, (user) => {
                if (user && user.displayName) {
                    setUserName(user.displayName);
                    setIsLoading(false)
                } else {
                    setUserName('Username');
                }
            })
        } catch (error) {
            alert('User name Error');
        }
    }

    useEffect(() => {
        userIsExist();
        return (): void => userIsExist();
    }, []);

    return (
        <Paper elevation={5} sx={{borderRadius: 5, bgcolor: indigo[500], margin: 2}}>
            <Stack direction="row" justifyContent="space-between" sx={{padding: 2}} spacing={0}>
                <Button onClick={() => dispatch(signOutAccount())} variant="outlined" sx={{
                    borderRadius: 5, fontWeight: 'bold', backgroundColor: 'white', ":hover": {
                        bgcolor: grey[300],
                    }}}>Sign Out</Button>
                <Stack direction="row" alignItems="center">
                    {isLoading
                        ? (<>
                            <Skeleton variant="circular" width={40} height={40} sx={{marginX: 2}}/>
                            <Skeleton width={90} height={40} sx={{marginX: 2}}/>
                        </>)
                        : (<>
                            <Avatar sx={{bgcolor: deepOrange[500], marginRight: 2}}>{avatarWord(userName.toString())}</Avatar>
                            <Button disabled={currentPath === '/profile'} onClick={goToProfilePage} variant="outlined" sx={{borderRadius: 5, fontWeight: 'bold', backgroundColor: 'white', height: '40px', ":hover": {bgcolor: grey[300]}}}>
                                {userName}
                            </Button>
                        </>)
                    }
                </Stack>
            </Stack>
        </Paper>
    );
};

export default Header;