import {Box, Paper} from "@mui/material";
import React from "react";
import {useAppDispatch} from "../hooks/reduxHooks.ts";
import Header from "../components/Header.tsx";


const Profile = () => {
    const dispatch = useAppDispatch();

    return (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" flexDirection='column'>
            <Paper sx={{minWidth: '90vw', minHeight: '90vh', borderRadius: 5, alignItems: "center",}}
                   elevation={24}>
                <Header/>
            </Paper>
        </Box>
    );
};

export default Profile;