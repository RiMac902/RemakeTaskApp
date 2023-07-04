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
import Header from "../components/Header.tsx";

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
                    <Header/>
                    <Dashboard/>
                </Paper>
            </Box>
        </>
    );
};

export default HomePage;