import {Box, Button, Paper, Typography} from "@mui/material";
import React, {useState} from "react";
import Header from "../components/Header.tsx";
import {firebaseAuth} from "../firebase.ts";
import getUserData from "../hooks/getUserData.tsx";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks.ts";
import {uploadAvatar} from "../store/features/userSlice.ts";

const Profile = () => {
    const [photo, setPhoto] = useState<File | null>(null);
    const {getUser} = getUserData(firebaseAuth);
    const {  isLoading, error } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    };

    const handleClick = () => {
        dispatch(uploadAvatar({ file: photo, user: getUser }));
    };


    return (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" flexDirection='column'>
            <Paper sx={{minWidth: '90vw', minHeight: '90vh', borderRadius: 5, alignItems: "center"}} elevation={24}>
                <Header/>
                <Typography variant={'h1'}>{getUser?.displayName || 'Loading...'}</Typography>


                <Button onClick={handleClick} variant="contained" component="label">
                    Upload File
                </Button>

                <input type="file" onChange={handleChange}/>
            </Paper>
        </Box>
    );
};

export default Profile;