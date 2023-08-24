import {Button, CircularProgress, Paper, Stack, Typography, useMediaQuery} from "@mui/material";
import React, {useRef, useState} from "react";
import {firebaseAuth} from "../firebase.ts";
import getUserData from "../hooks/getUserData.tsx";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks.ts";
import {uploadAvatar} from "../store/features/userSlice.ts";
import LoadingButton from '@mui/lab/LoadingButton';
import MainLayout from "../layout/MainLayout.tsx";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {grey, indigo} from "@mui/material/colors";

const ProfilePage = () => {
    const [photo, setPhoto] = useState<File | null>(null);
    const {getUser, isLoading: userDataLoading} = getUserData(firebaseAuth);
    const {photoURL} = getUser ?? {};
    const [selectedImageURL, setSelectedImageURL] = useState<string | null>(null);
    const {isLoading} = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement | null>(null);
    const isCompactMD = useMediaQuery('(max-width:900px)');
    const isCompactSM = useMediaQuery('(max-width:600px)');


    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPhoto(e.target.files[0]);
            const imageURL = URL.createObjectURL(e.target.files[0]);
            setSelectedImageURL(imageURL);
        }
    };

    const handleUploadClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const handleClick = () => {
        if (photo) {
            dispatch(uploadAvatar({file: photo, user: getUser}));
        }
    };


    return (
        <MainLayout>
            <Paper sx={{bgcolor: indigo[500], marginX: 2, padding: 2, marginBottom: 2, borderRadius: 5}} elevation={5}>
                <Typography variant={isCompactMD ? 'h4' : 'h3'} sx={{color: 'white', userSelect: 'none', marginX: 1,}}>Profile</Typography>
                <Paper sx={{bgcolor: grey[50], marginX: 1, borderRadius: 5, marginTop: 2, padding: 3}} elevation={5}>

                    <Stack direction={'row'}
                           sx={{justifyContent: `${isCompactMD ? 'center' : 'flex-start'}`, display: 'flex'}}>
                        <Stack direction={'column'} sx={{alignItems: 'center'}}>

                            <Stack direction={'column'}>
                                <Paper elevation={5}
                                       sx={{
                                           width: '20rem',
                                           height: '20rem',
                                           borderRadius: 5,
                                           marginBottom: 3,
                                           display: 'flex',
                                           justifyContent: 'center',
                                           alignItems: 'center',
                                       }}>
                                    {userDataLoading
                                        ? <CircularProgress size={100}/>
                                        : <img src={selectedImageURL || photoURL || ''}
                                             alt={'Selected'}
                                             style={{
                                                 width: '100%',
                                                 height: '100%',
                                                 objectFit: 'cover',
                                                 borderRadius: '20px',
                                             }}/>}
                                </Paper>

                            </Stack>

                            <Stack direction={'row'} spacing={2}>
                                <Button
                                    sx={{borderRadius: 5}}
                                    variant="outlined"
                                    onClick={handleUploadClick}>
                                    Select an Image
                                </Button>
                                <LoadingButton
                                    sx={{borderRadius: 5}}
                                    startIcon={isCompactSM ? null : <CloudUploadIcon/>}
                                    onClick={handleClick}
                                    variant="outlined"
                                    component="span"
                                    loading={isLoading}
                                    disabled={!photo}>
                                    {isCompactSM ? <CloudUploadIcon/> : 'Upload Image'}
                                </LoadingButton>
                                <input
                                    type="file"
                                    id="file-input"
                                    accept="image/*"
                                    onChange={handleChange}
                                    ref={inputRef}
                                    style={{display: 'none'}}
                                />
                            </Stack>
                        </Stack>

                    </Stack>

                    <Stack direction={'column'}>
                        <Typography variant={isCompactMD ? 'h3' : 'h2'}>
                            {getUser?.displayName || <CircularProgress/>}
                        </Typography>
                        <Typography variant={isCompactMD ? 'h5' : 'h4'} sx={{color: grey[700],}}>
                            Software Engineer
                        </Typography>
                    </Stack>
                </Paper>
            </Paper>
        </MainLayout>
    );
};

export default ProfilePage;
