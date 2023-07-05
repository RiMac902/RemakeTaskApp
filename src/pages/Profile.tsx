import {Box, Button, Paper, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import Header from "../components/Header.tsx";
import {firebaseAuth, storage} from "../firebase.ts";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";
import {updateProfile, User} from "firebase/auth";
import {useAuth} from "../hooks/useAuth.tsx";
import getUserData from "../hooks/getUserData.tsx";

const Profile = () => {
    const currentUser = useAuth();
    const [photoURL, setPhotoURL] = useState<string | undefined>();
    const [photo, setPhoto] = useState<File | null>(null);
    const {getUser} = getUserData(firebaseAuth);



    async function upload(file: File | null, getUser: User) {
        const fileRef = ref(storage, getUser.uid + '.png');

        const snapshot = await uploadBytes(fileRef, file!);
        const photoURL = await getDownloadURL(fileRef);

        updateProfile(getUser, {photoURL});

        alert("Uploaded file!");
    }

    function handleChange(e: any) {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            setPhoto(e.target.files[0])

        }
    }

    function handleClick() {
        upload(photo || null, getUser!);
    }

    useEffect(() => {
        if (getUser?.photoURL) {
            setPhotoURL(getUser.photoURL);
        }
    }, [getUser])


    return (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh" flexDirection='column'>
            <Paper sx={{minWidth: '90vw', minHeight: '90vh', borderRadius: 5, alignItems: "center"}} elevation={24}>
                <Header/>
                <Typography variant={'h1'}>{getUser?.displayName || 'Loading...'}</Typography>


                    <Button  onClick={handleClick} variant="contained" component="label">
                        Upload File
                    </Button>

                <input type="file" onChange={handleChange} />
            </Paper>
        </Box>
    );
};

export default Profile;