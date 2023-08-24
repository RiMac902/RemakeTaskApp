import {CircularProgress,Button, Paper, Stack, Typography, Input} from "@mui/material";
import React, {useState, useRef} from "react";
import {firebaseAuth} from "../firebase.ts";
import getUserData from "../hooks/getUserData.tsx";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks.ts";
import {uploadAvatar} from "../store/features/userSlice.ts";
import LoadingButton from '@mui/lab/LoadingButton';
import MainLayout from "../layout/MainLayout.tsx";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const ProfilePage = () => {
    const [photo, setPhoto] = useState<File | null>(null);
    const { getUser } = getUserData(firebaseAuth);
    const { isLoading } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    };

    const handleUploadClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const handleClick = () => {
        if (photo) {
            dispatch(uploadAvatar({ file: photo, user: getUser }));
        }
    };

    return (
        <MainLayout>
            <Stack direction={'row'} sx={{ justifyContent: 'center' }}>
                <Paper elevation={5}>
                    <Typography variant={'h1'}>
                        {getUser?.displayName || <CircularProgress />}
                    </Typography>
                    <Stack direction={'row'}>
                        <input
                            type="file"
                            id="file-input"
                            accept="image/*"
                            onChange={handleChange}
                            ref={inputRef}
                            style={{ display: 'none' }}
                        />
                        <Button
                            variant="contained"
                            startIcon={<CloudUploadIcon />}
                            onClick={handleUploadClick}
                        >
                            Upload File
                        </Button>
                        <LoadingButton
                            startIcon={<CloudUploadIcon />}
                            onClick={handleClick}
                            variant="contained"
                            component="span"
                            loading={isLoading}
                            disabled={!photo}
                        >
                            Confirm Upload
                        </LoadingButton>
                    </Stack>
                </Paper>
            </Stack>
        </MainLayout>
    );
};

export default ProfilePage;
