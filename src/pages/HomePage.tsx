import {onAuthStateChanged, signOut} from "firebase/auth";
import {firebaseAuth} from "../firebase.ts";
import {Avatar, Box, Button, Paper, Skeleton, Stack, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {deepOrange, grey, indigo} from '@mui/material/colors';
import {avatarWord} from "../helpers/avatarWord.ts";
import Dashboard from "../components/Dashboard.tsx";

const HomePage = () => {
    const [userName, setUserName] = useState<String>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const signOutAccount = () => {
        try {
            signOut(firebaseAuth)
        } catch (error) {
            console.log('Sign-out error:', error);
        }
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
                            <Button onClick={signOutAccount} variant="outlined" sx={{borderRadius: 5, fontWeight: 'bold', backgroundColor: 'white', ":hover": {
                                    bgcolor: grey[300],
                                }}}>Sign
                                Out</Button>
                            <Stack direction="row" alignItems="center">
                                {
                                    isLoading
                                        ? (<>
                                            <Skeleton variant="circular" width={40} height={40}
                                                      sx={{marginX: 2}}/>
                                            <Skeleton width={90} height={40} sx={{marginX: 2}}/>
                                        </>)
                                        : (<>
                                            <Avatar sx={{bgcolor: deepOrange[500]}}>{avatarWord(userName)}</Avatar>
                                            <Typography variant="h5" sx={{marginLeft: 2, color: 'white'}}>{userName}</Typography>
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