import {Box, Paper, Typography} from "@mui/material";
import React from "react";
import Header from "../components/Header.tsx";
import useFetchUserData from "../hooks/getUserData.tsx";
import {firebaseAuth} from "../firebase.ts";


const Profile = () => {
    const {getUser, isLoading, error} = useFetchUserData(firebaseAuth);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return isLoading ? <div>Error: {error}</div> : (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" flexDirection='column'>
            <Paper sx={{minWidth: '90vw', minHeight: '90vh', borderRadius: 5, alignItems: "center",}}
                   elevation={24}>
                <Header/>
                <Typography variant={'h1'}>{getUser?.displayName || 'Loading...'}</Typography>
            </Paper>
        </Box>
    );
};

export default Profile;