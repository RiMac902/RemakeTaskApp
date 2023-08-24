import {Box, Paper, Typography} from "@mui/material";
import React, {useState} from "react";
import Header from "../components/Header.tsx";
import {firebaseAuth} from "../firebase.ts";
import getUserData from "../hooks/getUserData.tsx";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks.ts";
import {uploadAvatar} from "../store/features/userSlice.ts";
import LoadingButton from '@mui/lab/LoadingButton';
import MainLayout from "../layout/MainLayout.tsx";

const ProfilePage = () => {
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
        <MainLayout>

                <Typography variant={'h1'}>{getUser?.displayName || 'Loading...'}</Typography>

                <Box display="flex" alignItems={'center'}>
                    <LoadingButton
                        onClick={handleClick}
                        variant="contained"
                        component="label"
                        loading={isLoading}>
                        Upload File
                    </LoadingButton>
                    <input type="file" onChange={handleChange} />
                </Box>

        </MainLayout>
    );
};

export default ProfilePage;