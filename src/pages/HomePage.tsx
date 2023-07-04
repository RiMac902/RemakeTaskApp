import {onAuthStateChanged, signOut} from "firebase/auth";
import {firebaseAuth} from "../firebase.ts";
import {Avatar, Box, Button, Paper, Skeleton, Stack, Typography} from "@mui/material";
import React, {FC, useEffect, useState} from "react";
import {deepOrange, grey, indigo} from '@mui/material/colors';
import {avatarWord} from "../helpers/avatarWord.ts";
import Dashboard from "../components/Dashboard.tsx";
import {signOutAccount} from "../store/features/authSlice.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store.ts";
import {useNavigate} from "react-router-dom";

const HomePage: FC = () => {
    const [userName, setUserName] = useState<String>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();


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
        <>
            <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" flexDirection='column'>
                <Paper sx={{minWidth: '90vw', minHeight: '90vh', borderRadius: 5, alignItems: "center",}}
                       elevation={24}>
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
                                            <Button onClick={goToProfilePage} variant="outlined" sx={{borderRadius: 5, fontWeight: 'bold', backgroundColor: 'white', height: '40px', ":hover": {bgcolor: grey[300]}}}>
                                                {userName}
                                            </Button>
                                        </>)
                                }
                            </Stack>
                        </Stack>
                    </Paper>
                    <Dashboard/>
                </Paper>
            </Box>
        </>
    );
};

export default HomePage;