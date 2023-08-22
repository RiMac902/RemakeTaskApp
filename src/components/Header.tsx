import React from 'react';
import {grey, indigo} from "@mui/material/colors";
import {Avatar, Button, Paper, Skeleton, Stack} from "@mui/material";
import {signOutAccount} from "../store/features/authSlice.ts";
import {useAppDispatch} from "../hooks/reduxHooks.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {firebaseAuth} from "../firebase.ts";
import getUserData from "../hooks/getUserData.tsx";


const Header = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const {getUser, isLoading} = getUserData(firebaseAuth);
    const {photoURL} = getUser ?? {};

    const goToProfilePage = () => navigate('/profile');
    const singOutHandle = () => dispatch(signOutAccount());
    // const goToCreateTaskPage = () => navigate('/createTask');
    const goToCreateProjectPage = () => navigate('/createProject');


    return (
        <Paper elevation={5} sx={{borderRadius: 5, bgcolor: indigo[500], margin: 2}}>
            <Stack direction="row" justifyContent="space-between" sx={{padding: 2}} spacing={0}>
                <Button onClick={singOutHandle} variant="outlined" sx={{
                        borderRadius: 5, fontWeight: 'bold', backgroundColor: 'white', ":hover": {
                            bgcolor: grey[300],
                        }
                }}>Sign Out</Button>
                <Stack direction="row" alignItems="center">
                    {isLoading
                        ? (<>
                            <Skeleton width={90} height={40} sx={{marginX: 2}}/>
                            <Skeleton variant="circular" width={40} height={40} sx={{marginX: 2}}/>
                        </>)
                        : (<>
                            <Button onClick={goToCreateProjectPage} variant="outlined" disabled={currentPath === '/createProject'} sx={{
                                marginX: 2,
                                borderRadius: 5,
                                fontWeight: 'bold',
                                backgroundColor: 'white',
                                height: '40px',
                                ":hover": {bgcolor: grey[300]}
                            }}>New Project</Button>

                            <Button disabled={currentPath === '/profile'} onClick={goToProfilePage} sx={{padding: 0}}>
                                <Avatar src={photoURL || ''} sx={{border: '2px solid #fff',  ":hover": {border: `2px solid ${grey[300]}`}}}></Avatar>
                            </Button>
                        </>)
                    }
                </Stack>
            </Stack>
        </Paper>
    );
};

export default Header;